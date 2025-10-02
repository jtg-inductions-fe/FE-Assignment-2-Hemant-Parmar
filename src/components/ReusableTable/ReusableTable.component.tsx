import { ReactNode } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { formatDateVariants } from '@utils';

import { HeadCellText, StatusChip } from './ReusableTable.styles';
import type {
    Category,
    ReusableTableProps,
    Status,
} from './ReusableTable.types';

// If you are not passing a category from one of the below, you have to pass custom formatter function
// Category options: 'date', 'amount', 'status'
// Example of custom formatter function:
/*
formatter: (row) => (
    <Typography variant="body2" color="text.secondary">
        {row.customField}
    </Typography>
)
*/
function renderCell<T>(category: Category | undefined, data: T): ReactNode {
    if (!category) return null;

    switch (category) {
        case 'date':
            if (typeof data !== 'string') return null;
            const { usFull } = formatDateVariants(data);
            return (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={(theme) => theme.mixins.lineClamp(1)}
                >
                    {usFull}
                </Typography>
            );
        case 'amount':
            if (typeof data !== 'number') return null;
            return (
                <Typography
                    variant="body1"
                    fontWeight={(theme) => theme.typography.fontWeightRegular}
                    sx={(theme) => theme.mixins.lineClamp(1)}
                >
                    {data < 0 ? `-$${-data}` : `$${data}`}
                </Typography>
            );
        case 'status':
            if (typeof data !== 'string') return null;
            return <StatusChip label={data as Status} size="small" />;
        default:
            return null;
    }
}

export const ReusableTable = <T extends { id: string | number }>({
    //every row/object in the data must have an id field
    columns,
    data,
}: ReusableTableProps<T>) => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

    const visibleColumns = columns.filter(
        (col) => isNotMobile || !col.hideOnMobile,
    );

    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: 'background.default' }}>
                    <TableRow>
                        {visibleColumns.map((col) => (
                            <TableCell key={col.label}>
                                <HeadCellText>{col.label}</HeadCellText>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:nth-of-type(even)': {
                                    backgroundColor:
                                        theme.palette.background.default,
                                },
                            }}
                        >
                            {visibleColumns.map((col) => (
                                <TableCell key={col.label}>
                                    {'formatter' in col
                                        ? col.formatter(row)
                                        : renderCell(
                                              col.category,
                                              row[col.key],
                                          )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

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

import type { Status, ReusableTableProps } from './ReusableTable.types';
import { HeadCellText, StatusChip } from './ReusableTable.styles';
import { formatDateVariants } from '@utils';

function render(category: string | undefined, data: any) {
    if (category) {
        if (category === 'date') {
            return (
                <Typography variant="body2" color="text.secondary">
                    {formatDateVariants(data as string)['usFull']}
                </Typography>
            );
        } else if (category === 'amount') {
            return (
                <Typography
                    variant="body1"
                    fontWeight={(theme) => theme.typography.fontWeightRegular}
                >
                    {(data as number) < 0
                        ? `-$${-data as number}`
                        : `$${data as number}`}
                </Typography>
            );
        } else if (category === 'status') {
            return <StatusChip label={data as Status} size="small" />;
        }
    } else {
        return <Typography>{data}</Typography>;
    }
}

export const ReusableTable = <T,>({ columns, data }: ReusableTableProps<T>) => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: 'background.default' }}>
                    <TableRow>
                        {columns.map((col) =>
                            !isNotMobile && col.hideOnMobile ? null : (
                                <TableCell key={col.label}>
                                    <HeadCellText> {col.label}</HeadCellText>
                                </TableCell>
                            ),
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:nth-of-type(even)': {
                                    backgroundColor: (theme) =>
                                        theme.palette.background.default,
                                },
                            }}
                        >
                            {columns.map((col) =>
                                !isNotMobile && col.hideOnMobile ? null : (
                                    <TableCell key={col.label}>
                                        {'formatter' in col
                                            ? col.formatter?.(row)
                                            : render(
                                                  col.category,
                                                  row[col.key],
                                              )}
                                    </TableCell>
                                ),
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

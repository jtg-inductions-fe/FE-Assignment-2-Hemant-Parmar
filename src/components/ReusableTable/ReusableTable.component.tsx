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

import { ReusableTableProps } from './ReusableTable.types';
import { HeadCellText, StatusChip } from './ReusableTable.styles';
import { formatDateVariants } from '@utils';
import { Transaction } from '@containers';

function render<T extends Transaction>(key: string, row: T) {
    if (key === 'date') {
        return (
            <Typography variant="body2" color="text.secondary">
                {formatDateVariants(row.date)['usFull']}
            </Typography>
        );
    } else if (key === 'desc') {
        return (
            <Typography variant="body2" fontWeight="medium">
                <Typography variant="body2" component="span">
                    Payment {row.status === 'Cancelled' ? ' failed ' : ''}
                    {row.amount < 0 ? ' refund to ' : ' from '}
                </Typography>
                {row.person}
            </Typography>
        );
    } else if (key === 'amount') {
        return <Typography
            variant="body1"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
        >
            {row.amount < 0 ? `-$${-row.amount}` : `$${row.amount}`}
        </Typography>;
    } else if (key === 'status') {
        return <StatusChip label={row.status} size="small" />;
    } else {
        return <Typography>{JSON.stringify(row)}</Typography>;
    }
}

export const ReusableTable = <T extends object>({
    columns,
    data,
}: ReusableTableProps<T>) => {
    const theme = useTheme();
    const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: 'background.default' }}>
                    <TableRow>
                        {columns.map((col) =>
                            !isNotMobile && col.hideOnMobile ? null : (
                                <TableCell key={col.key.toString()}>
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
                                    <TableCell key={col.key.toString()}>
                                        {/* {col.key in rendererMap
                                            ? rendererMap(col.key)(row)
                                            : (row[
                                                  col.key as keyof T
                                              ] as React.ReactNode)} */}
                                        {render(col.key, row as Transaction)}
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

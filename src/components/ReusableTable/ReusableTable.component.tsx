import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { ReusableTableProps } from './ReusableTable.types';
import { HeadCellText } from './ReusableTable.styles';

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
                                        {col.render
                                            ? col.render(row)
                                            : (row[
                                                  col.key as keyof T
                                              ] as React.ReactNode)}
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

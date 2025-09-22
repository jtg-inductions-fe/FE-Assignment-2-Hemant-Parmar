import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { TransactionProps } from './TransactionTable.types';
import { StatusChip } from './TransactionTable.styles';

export const TransactionTable = ({ data }: TransactionProps) => {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: 'background.default' }}>
                    <TableRow>
                        <TableCell>TRANSACTION</TableCell>
                        <TableCell>DATE & TIME</TableCell>
                        <TableCell>AMOUNT</TableCell>
                        <TableCell>STATUS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:nth-of-type(even)': {
                                    backgroundColor: (theme) =>
                                        theme.palette.background.default,
                                },
                            }}
                        >
                            <TableCell>
                                <Typography variant="h3">
                                    {item.person}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="text.secondary">
                                    {item.date}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h3">
                                    ${item.amount}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <StatusChip label={item.status} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

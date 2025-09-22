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
import { StatusChip, HeadCellText } from './TransactionTable.styles';

export const TransactionTable = ({ descFormatter, data }: TransactionProps) => {
    return (
        <TableContainer>
            <Table>
                <TableHead sx={{ backgroundColor: 'background.default' }}>
                    <TableRow>
                        <TableCell>
                            <HeadCellText>TRANSACTION</HeadCellText>
                        </TableCell>
                        <TableCell>
                            <HeadCellText>DATE & TIME</HeadCellText>
                        </TableCell>
                        <TableCell>
                            <HeadCellText>AMOUNT</HeadCellText>
                        </TableCell>
                        <TableCell>
                            <HeadCellText>STATUS</HeadCellText>
                        </TableCell>
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
                                <Typography variant="body2" fontWeight="medium">
                                    {descFormatter
                                        ? descFormatter(item)
                                        : item.person}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {item.date}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    variant="body1"
                                    fontWeight={(theme) =>
                                        theme.typography.fontWeightRegular
                                    }
                                >
                                    {item.amount < 0
                                        ? `-$${-item.amount}`
                                        : `$${item.amount}`}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <StatusChip label={item.status} size="small" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

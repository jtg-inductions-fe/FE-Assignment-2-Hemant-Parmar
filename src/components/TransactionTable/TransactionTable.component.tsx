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
import {
    StatusChip,
    HeadCellText,
    MobileHiddenCell,
} from './TransactionTable.styles';

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
                            <HeadCellText
                                textAlign={{ xs: 'right', sm: 'center' }}
                            >
                                DATE & TIME
                            </HeadCellText>
                        </TableCell>
                        <MobileHiddenCell>
                            <HeadCellText>AMOUNT</HeadCellText>
                        </MobileHiddenCell>
                        <MobileHiddenCell>
                            <HeadCellText>STATUS</HeadCellText>
                        </MobileHiddenCell>
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
                                    textAlign={{ xs: 'right', sm: 'center' }}
                                >
                                    {item.date}
                                </Typography>
                            </TableCell>
                            <MobileHiddenCell>
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
                            </MobileHiddenCell>
                            <MobileHiddenCell>
                                <StatusChip label={item.status} size="small" />
                            </MobileHiddenCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

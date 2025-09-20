import {
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';

import { CustomTableProps } from './CustomTable.types';

export const CustomTable = ({ data }: CustomTableProps) => {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '& td': {
                                    borderBottom: (theme) =>
                                        index < data.length - 1
                                            ? `1px solid ${theme.palette.divider}`
                                            : null,
                                },
                            }}
                        >
                            {'avatar' in item ? (
                                <TableCell padding="none">
                                    <Avatar
                                        src={item.avatar}
                                        alt={item.content}
                                    />
                                </TableCell>
                            ) : null}
                            <TableCell padding="none">
                                <Typography variant="h3">
                                    {item.content}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {item.caption}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h3" textAlign="right">
                                    {item.format(item.value)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

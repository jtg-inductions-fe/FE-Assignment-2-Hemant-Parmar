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

export const CustomTable = ({ users }: CustomTableProps) => {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index}>
                            {'avatar' in user ? (
                                <TableCell padding="none">
                                    <Avatar
                                        src={user.avatar}
                                        alt={user.content}
                                    />
                                </TableCell>
                            ) : null}
                            <TableCell padding="none">
                                <Typography variant="h3" component="p">
                                    {user.content}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {user.caption}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h3" component="p">
                                    {user.format(user.value)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

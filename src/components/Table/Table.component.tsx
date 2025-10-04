import {
    Avatar,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    Typography,
} from '@mui/material';

import { StyledRow } from './Table.styles';
import { TableProps } from './Table.types';

export const Table = ({ data }: TableProps) => (
    <TableContainer>
        <MuiTable>
            <TableBody>
                {data.map((item, index) => (
                    <StyledRow
                        key={item.id}
                        showDivider={index < data.length - 1}
                    >
                        {'avatar' in item ? (
                            <TableCell padding="none">
                                <Avatar src={item.avatar} alt={item.content} />
                            </TableCell>
                        ) : null}
                        <TableCell padding="none">
                            <Typography variant="h3">{item.content}</Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {item.caption}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h3" textAlign="right">
                                {item.valueFormatter(item.value)}
                            </Typography>
                        </TableCell>
                    </StyledRow>
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);

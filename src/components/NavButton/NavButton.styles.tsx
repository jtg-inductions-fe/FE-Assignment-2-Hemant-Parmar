import {ListItemButton, styled } from '@mui/material';

export const StyledButton = styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    borderRadius: theme.spacing(3),
    textTransform: 'none',
})) as typeof ListItemButton;

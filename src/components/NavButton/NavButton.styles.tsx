import {ListItemButton, styled } from '@mui/material';

export const StyledButton = styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    padding: 0,
    borderRadius: theme.spacing(3),
    textTransform: 'none',
})) as typeof ListItemButton;

import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    borderRadius: theme.spacing(3),
    textTransform: 'none',
})) as typeof ListItemButton;

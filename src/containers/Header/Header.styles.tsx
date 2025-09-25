import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RoundedButton = styled(IconButton)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(10),
    height: theme.spacing(10),
    padding: theme.spacing(0.5),
    borderRadius: '50%',
    lineHeight: 1,

    '&:hover': {
        boxShadow: theme.shadows[10],
    },
})) as typeof IconButton;

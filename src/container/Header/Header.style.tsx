import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, styled } from '@mui/material';

import { theme } from '@theme';

export const NotificationsButton = styled(IconButton)({
    display: 'block',
    borderRadius: '50%',
    height: '100%',
    aspectRatio: '1/1',
    lineHeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        boxShadow: theme.shadows[10],
    },
}) as typeof IconButton;

export const StyledNotificationsIcon = styled(NotificationsIcon)({
    color: theme.palette.text.primary,
    borderRadius: '50%',
});

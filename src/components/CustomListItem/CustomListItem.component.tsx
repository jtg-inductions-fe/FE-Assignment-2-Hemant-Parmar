import { Link } from 'react-router-dom';

import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { CustomListItemProps } from './CustomListItem.types';

export const CustomListItem = ({
    title,
    route,
    children,
}: CustomListItemProps) => (
    <ListItem disablePadding>
        <ListItemButton
            component={Link}
            to={route ?? `/${title}`}
            sx={{ pl: children ? 0 : 16 }}
        >
            {children && <ListItemIcon>{children}</ListItemIcon>}
            <ListItemText primary={title} />
        </ListItemButton>
    </ListItem>
);

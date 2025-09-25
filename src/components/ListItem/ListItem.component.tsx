import { Link } from 'react-router-dom';

import {
    ListItem as MuiListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { ListItemProps } from './ListItem.types';

export const ListItem = ({ title, route, children }: ListItemProps) => (
    <MuiListItem disablePadding>
        <ListItemButton
            component={Link}
            to={route ?? `/${title}`}
            sx={{ pl: children ? 0 : 16 }}
        >
            {children && <ListItemIcon>{children}</ListItemIcon>}
            <ListItemText primary={title} />
        </ListItemButton>
    </MuiListItem>
);

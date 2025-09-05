import { Link } from 'react-router-dom';

import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

export function CustomListItem({
    title,
    route,
    children,
}: {
    title: string;
    route?: string;
    children?: React.ReactNode;
}) {
    return (
        <ListItem sx={{ p: 0 }}>
            <ListItemButton
                component={Link}
                to={`/${title && route}`}
                sx={{ pl: children ? 0 : 16 }}
            >
                {children && <ListItemIcon>{children}</ListItemIcon>}
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
}

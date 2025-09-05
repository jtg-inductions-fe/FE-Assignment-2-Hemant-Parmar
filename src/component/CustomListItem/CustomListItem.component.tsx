import { Link } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

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
        <ListItemButton component={Link} to={`/${title && route}`}>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    );
}

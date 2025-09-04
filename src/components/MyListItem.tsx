import { Link } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function MyListItem({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <ListItemButton component={Link} to={`/${title}`}>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    );
}

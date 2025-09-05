import { Link, useLocation } from 'react-router-dom';

import {
    Button,
    Chip,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { NavButtonProps } from './NavButton.type';

export const NavButton = ({
    color,
    Icon,
    title,
    route,
    count,
}: NavButtonProps) => {
    const location = useLocation();
    const routeColor: 'primary' | 'inherit' =
        location.pathname === `/${route}` ? 'primary' : 'inherit';

    return (
        <Button
            component={Link}
            to={`/${route}`}
            color={color || routeColor}
            sx={{ display: 'flex', textTransform: 'none', p: 0 }}
        >
            <ListItem>
                <ListItemIcon>{<Icon color={routeColor} />}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
                {count && <Chip label={count} size="small" />}
            </ListItem>
        </Button>
    );
};

import { Link, useLocation } from 'react-router-dom';

import { Looks3 } from '@mui/icons-material'; // will change it to proper count in future
import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { NavButtonProps } from './NavButton.type';

export const NavButton = ({
    color,
    icon,
    title,
    route,
    count,
}: NavButtonProps) => {
    const location = useLocation();
    const Color: 'primary' | 'inherit' =
        location.pathname === `/${route}` ? 'primary' : 'inherit';

    return (
        <Button
            component={Link}
            to={`/${route}`}
            color={color || Color}
            sx={{ display: 'flex', textTransform: 'none', p: 0 }}
        >
            <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
                {count && <Looks3 />}
            </ListItem>
        </Button>
    );
};

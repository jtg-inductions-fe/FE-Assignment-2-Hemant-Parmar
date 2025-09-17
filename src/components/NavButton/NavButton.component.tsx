import { Link, useLocation } from 'react-router-dom';

import { Chip, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { StyledButton } from './NavButton.styles';
import { NavButtonProps } from './NavButton.types';

export const NavButton = ({
    color,
    Icon,
    title,
    route,
    count,
}: NavButtonProps) => {
    const location = useLocation();
    const routeColor: 'primary' | 'inherit' =
        location.pathname === route ? 'primary' : 'inherit';

    return (
        <ListItem disablePadding aria-label={title}>
            <StyledButton
                component={Link}
                to={route}
                color={color || routeColor}
            >
                <ListItemIcon>
                    <Icon color={routeColor} />
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
                {count && <Chip label={count} size="small" />}
            </StyledButton>
        </ListItem>
    );
};

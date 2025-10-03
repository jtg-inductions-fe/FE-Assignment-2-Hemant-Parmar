import { Link } from 'react-router-dom';

import {
    Chip,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

import { StyledButton } from './NavButton.styles';
import { NavButtonProps } from './NavButton.types';

export const NavButton = ({
    active,
    icon,
    title,
    route,
    count,
}: NavButtonProps) => (
    <ListItem disablePadding aria-label={title}>
        <StyledButton component={Link} to={route}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
                <Typography
                    color={active ? 'primary' : 'inherit'}
                    sx={(theme) => theme.mixins.lineClamp(1)}
                >
                    {title}
                </Typography>
            </ListItemText>
            {count && <Chip label={count} size="small" color="error" />}
        </StyledButton>
    </ListItem>
);

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
}: NavButtonProps) => {
    const Icon = icon; // To differentiate Icon as a React Element
    return (
        <ListItem disablePadding aria-label={title}>
            <StyledButton component={Link} to={route}>
                <ListItemIcon>
                    <Icon color={active ? 'primary' : undefined} />
                </ListItemIcon>
                <ListItemText>
                    <Typography color={active ? 'primary' : 'inherit'}>
                        {title}
                    </Typography>
                </ListItemText>
                {count && <Chip label={count} size="small" />}
            </StyledButton>
        </ListItem>
    );
};

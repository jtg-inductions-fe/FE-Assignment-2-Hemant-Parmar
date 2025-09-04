import { Link } from 'react-router-dom';

import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const OverviewButton = ({
    color,
    children,
}: {
    color: 'primary' | 'inherit';
    children: React.ReactNode;
}) => (
    <Button
        component={Link}
        to="/"
        color={color}
        sx={{ display: 'flex', textTransform: 'none', p: 0 }}
    >
        <ListItem>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText>Overview</ListItemText>
        </ListItem>
    </Button>
);

export default OverviewButton;

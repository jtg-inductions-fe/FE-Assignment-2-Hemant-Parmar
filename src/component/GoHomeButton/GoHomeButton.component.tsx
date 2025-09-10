import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

export const GoHomeButton = () => (
    <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ textTransform: 'none', borderRadius: 3 }}
    >
        <Typography color="secondary">Go back home</Typography>
    </Button>
);

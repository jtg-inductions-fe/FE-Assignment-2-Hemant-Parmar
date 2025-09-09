import { Link } from 'react-router-dom';

import { Box, Button, Container, Typography } from '@mui/material';

import NotFOundImageURL from '@assets/images/404.svg';

export const NotFound = () => (
    <Container
        maxWidth="xl"
        sx={{
            textAlign: 'center',
        }}
    >
        <img height={600} src={NotFOundImageURL} alt="Not Found" />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center',
                }}
            >
                <Typography variant="h1">Page not Found</Typography>
                <Typography variant="body2">
                    Oops! Looks like you followed a bad link. If you think this
                    is a problem with us, please tell us.
                </Typography>
            </Box>
            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{ textTransform: 'none', borderRadius: 3 }}
            >
                Go back home
            </Button>
        </Box>
    </Container>
);

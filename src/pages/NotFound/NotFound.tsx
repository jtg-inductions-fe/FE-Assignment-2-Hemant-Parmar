import { Link } from 'react-router-dom';

import { Box, Button, Container, Typography } from '@mui/material';

import NotFoundImageURL from '@assets/images/404.svg';

export const NotFound = () => (
    <Container
        maxWidth="xl"
        sx={{
            textAlign: 'center',
        }}
    >
        <Box py={8}>
            <img src={NotFoundImageURL} alt="Not Found" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                alignItems: 'center',
                p: { xs: 4, sm: 0 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
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

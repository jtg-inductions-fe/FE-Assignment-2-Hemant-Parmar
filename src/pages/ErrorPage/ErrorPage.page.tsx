import { Link } from 'react-router-dom';

import { Box, Button, Container, Typography } from '@mui/material';

import ErrorImage from '@assets/images/business-3d-businesswoman-in-a-coffee-meditation.svg';

export const ErrorPage = () => (
    <Container
        maxWidth="xl"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
        }}
    >
        <Box
            sx={{
                py: 6,
                px: 13,
            }}
        >
            <img src={ErrorImage} alt="Not Found" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center',
                    mx: 4,
                }}
            >
                <Typography variant="h1">
                    Something has gone seriously wrong
                </Typography>
                <Typography variant="body2">
                    Its always time for a coffee break We should be back by the
                    time you finish your coffee.
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

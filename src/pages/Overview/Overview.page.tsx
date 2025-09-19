import { Box, Grid2 } from '@mui/material';

import { Customers, Gallery, Graph, Products } from '@containers';

export const Overview = () => (
    <Box>
        <Gallery />
        <Graph />
        <Grid2 maxWidth="xl" sx={{ m: 4}} container spacing={4}>
            <Customers />
            <Products />
        </Grid2>
    </Box>
);

import { Grid2 } from '@mui/material';

import { Customers, Gallery, SalesGraph, Products } from '@containers';

export const Overview = () => (
    <>
        <Gallery />
        <SalesGraph />
        <Grid2 maxWidth="xl" sx={{ m: 4 }} container spacing={4}>
            <Customers />
            <Products />
        </Grid2>
    </>
);

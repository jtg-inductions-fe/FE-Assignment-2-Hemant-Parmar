import { Grid2 } from '@mui/material';

import { Customers, Gallery, SalesGraph, Products } from '@containers';

export const Overview = () => (
    <>
        <Gallery />
        <SalesGraph />
        <Grid2
            maxWidth="xl"
            sx={{ m: 'auto', p: { sm: 3, xs: 2 } }}
            container
            spacing={{ sm: 3, xs: 2 }}
        >
            <Customers />
            <Products />
        </Grid2>
    </>
);

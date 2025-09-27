import { Grid2 } from '@mui/material';

import { Customers, Gallery, Graph, Products } from '@containers';

export const Overview = () => (
    <>
        <Gallery />
        <Graph />
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

import { CustomTable } from '@components';

import { Grid2 } from '@mui/material';
import { latestCustomers } from '@data';


export const Customers = () => {
    return (
        <Grid2 size={{ xs: 12, sm: 3 }}>
            <CustomTable users={latestCustomers} heading='Latest Customers'/>
        </Grid2>
    );
};

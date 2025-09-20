import { CustomContainer, CustomTable } from '@components';
import { Grid2 } from '@mui/material';
import { latestCustomers } from '@data';
import type { RowData } from '@components';

const data: RowData[] = latestCustomers.map((user) => ({
    content: user.name,
    caption: user.email,
    avatar: user.avatar,
    value: user.money,
    format: (val: number) => `$${val}`,
}));

export const Customers = () => {
    return (
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
            <CustomContainer heading="Latest Customers" disableGutters>
                <CustomTable data={data} />
            </CustomContainer>
        </Grid2>
    );
};

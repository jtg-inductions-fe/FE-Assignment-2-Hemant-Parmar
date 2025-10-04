import { Grid2 } from '@mui/material';

import type { RowData } from '@components';
import { Container, Table } from '@components';
import { latestCustomers } from '@data';

const data: RowData[] = latestCustomers.map((user) => ({
    id: user.id,
    content: user.name,
    caption: user.email,
    avatar: user.avatar,
    value: user.amount,
    valueFormatter: (val: number) => `$${val}`,
}));

export const Customers = () => (
    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Container heading="Latest Customers" disableGutters>
            <Table data={data} />
        </Container>
    </Grid2>
);

import { Grid2, Typography } from '@mui/material';

import type { RowData } from '@components';
import { Container, Table } from '@components';
import { topProducts } from '@data';

const data: RowData[] = topProducts.map((product) => ({
    content: product.label,
    caption: product.technology,
    value: product.sales,
    format: (val: number) => <Typography>{val} sales</Typography>,
}));

export const Products = () => (
    <Grid2 size={{ xs: 12, md: 6, lg: 8 }}>
        <Container heading="Latest Customers" disableGutters>
            <Table data={data} />
        </Container>
    </Grid2>
);

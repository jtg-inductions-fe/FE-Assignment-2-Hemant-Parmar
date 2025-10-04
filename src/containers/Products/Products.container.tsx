import { Grid2, Typography } from '@mui/material';

import type { RowData } from '@components';
import { Container, Table } from '@components';
import { topProducts } from '@data';

const data: RowData[] = topProducts.map((product) => ({
    id: product.id,
    content: product.label,
    caption: product.technology,
    value: product.sales,
    valueFormatter: (val: number) => (
        <>
            {val}
            <Typography component="span" color="text.secondary">
                {' '}
                sales
            </Typography>
        </>
    ),
}));

export const Products = () => (
    <Grid2 size={{ xs: 12, md: 6, lg: 8 }}>
        <Container heading="Top Products" disableGutters>
            <Table data={data} />
        </Container>
    </Grid2>
);

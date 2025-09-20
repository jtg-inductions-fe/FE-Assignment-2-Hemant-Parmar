import { CustomContainer, CustomTable } from '@components';
import type { RowData } from '@components';
import { Grid2, Typography } from '@mui/material';
import { topProducts } from '@data';

const data: RowData[] = topProducts.map((product) => ({
    content: product.label,
    caption: product.technology,
    value: product.sales,
    format: (val: number) => (
        <>
            {val}
            <Typography component="span" color="text.secondary">
                &nbsp;sales
            </Typography>
        </>
    ),
}));

export const Products = () => {
    return (
        <Grid2 size={{ xs: 12, md: 6, lg: 8 }}>
            <CustomContainer heading="Top Products" disableGutters>
                <CustomTable data={data} />
            </CustomContainer>
        </Grid2>
    );
};

import { CustomContainer, CustomTable } from '@components';
import type { RowData } from '@components';
import { Grid2, Typography } from '@mui/material';
import { topProducts } from '@data';

const data: RowData[] = topProducts.map(product => ({
    content: product.label,
    caption: product.technology,
    value: product.sales,
    format: (val: number) => <Typography>{val} sales</Typography>,
}));

export const Products = () => {
    return (
        <Grid2 size={{ xs: 12, sm: 8 }}>
            <CustomContainer heading="Latest Customers" disableGutters>
                <CustomTable users={data} />
            </CustomContainer>
        </Grid2>
    );
};

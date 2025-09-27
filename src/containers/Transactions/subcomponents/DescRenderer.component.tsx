import { Typography } from '@mui/material';

import { Transaction } from '@containers';

export const DescRenderer = ({ data }: { data: Transaction }) => (
    <Typography variant="body2" fontWeight="medium">
        <Typography variant="body2" component="span">
            Payment
            {data.status === 'Cancelled' ? ' failed ' : ''}
            {data.amount < 0 ? ' refund to ' : ' from '}
        </Typography>
        {data.person}
    </Typography>
);

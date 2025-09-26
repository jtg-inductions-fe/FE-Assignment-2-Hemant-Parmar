import { Transaction } from '@data';
import { Typography } from '@mui/material';

export const DescRenderer = ({ data }: { data: Transaction }) => (
    <Typography variant="body2" fontWeight="medium">
        <Typography variant="body2" component="span">
            Payment
            {(data?.status as Transaction['status']) === 'Cancelled'
                ? ' failed '
                : ''}
            {(data?.amount as number) < 0 ? ' refund to ' : ' from '}
        </Typography>
        {data?.person}
    </Typography>
);

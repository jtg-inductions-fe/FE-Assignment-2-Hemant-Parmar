import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Transaction } from './Transactions.types';
import { Typography } from '@mui/material';
import { formatDateVariants } from '@utils';

export const StatusChip = styled(Chip)<{ label: Transaction['status'] }>(
    ({ theme, label }) => ({
        backgroundColor:
            label === 'Completed'
                ? theme.palette.success.main
                : label === 'In Progress'
                  ? theme.palette.info.main
                  : theme.palette.error.main,
        color:
            label === 'Completed'
                ? theme.palette.success.contrastText
                : label === 'In Progress'
                  ? theme.palette.info.contrastText
                  : theme.palette.error.contrastText,
        ...theme.typography.caption,
    }),
);

export const descRenderer = (item: Transaction) => {
    return (
        <Typography variant="body2" fontWeight="medium">
            <Typography variant="body2" component="span">
                Payment {item.status === 'Cancelled' ? ' failed ' : ''}
                {item.amount < 0 ? ' refund to ' : ' from '}
            </Typography>
            {item.person}
        </Typography>
    );
};

export const dateRenderer = (item: Transaction) => (
    <Typography variant="body2" color="text.secondary">
        {formatDateVariants(item.date)['usFull']}
    </Typography>
);

export const amountRenderer = (item: Transaction) => (
    <Typography
        variant="body1"
        fontWeight={(theme) => theme.typography.fontWeightRegular}
    >
        {item.amount < 0 ? `-$${-item.amount}` : `$${item.amount}`}
    </Typography>
);

export const statusRenderer = (item: Transaction) => (
    <StatusChip label={item.status} size="small" />
);

import { TransactionTable, CustomContainer, Transaction } from '@components';

import { transactionsData } from '@data';
import { Typography } from '@mui/material';

const descFormatter = (item: Transaction) => {
    return (
        <>
            <Typography variant="body2" component="span">
                Payment {item.status === 'Cancelled' ? ' failed ' : ''}{' '}
                {item.amount < 0 ? ' refund to ' : ' from '}
            </Typography>
            {item.person}
        </>
    );
};

export const Transactions = () => {
    return (
        <CustomContainer
            heading="Transactions"
            caption="This is a list of latest transactions."
        >
            <TransactionTable
                data={transactionsData}
                descFormatter={descFormatter}
            />
        </CustomContainer>
    );
};

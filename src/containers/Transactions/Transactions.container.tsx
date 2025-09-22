import { TransactionTable, CustomContainer } from '@components';

import { transactionsData } from '@data';

export const Transactions = () => {
    return (
        <CustomContainer
            heading="Transactions"
            caption="This is a list of latest transactions."
        >
            <TransactionTable data={transactionsData} />
        </CustomContainer>
    );
};

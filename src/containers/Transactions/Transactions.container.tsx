import { ReusableTable, CustomContainer, Column } from '@components';

import { transactionsData } from '@data';

const transactionColumns: Column[] = [
    { key: 'desc', label: 'TRANSACTION' },
    { key: 'date', label: 'DATE & TIME' },
    {
        key: 'amount',
        label: 'AMOUNT',
        hideOnMobile: true,
    },
    {
        key: 'status',
        label: 'STATUS',
        hideOnMobile: true,
    },
];

export const Transactions = () => {
    return (
        <CustomContainer
            heading="Transactions"
            caption="This is a list of latest transactions."
        >
            <ReusableTable
                data={transactionsData}
                columns={transactionColumns}
            />
        </CustomContainer>
    );
};

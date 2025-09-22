import { ReusableTable, CustomContainer, Column } from '@components';

import { transactionsData } from '@data';
import { Transaction } from './Transactions.types';
import {
    amountRenderer,
    dateRenderer,
    descRenderer,
    statusRenderer,
} from './Transactions.styles';

const transactionColumns: Column<Transaction>[] = [
    { key: 'desc', label: 'TRANSACTION', render: descRenderer },
    { key: 'date', label: 'DATE & TIME', render: dateRenderer },
    {
        key: 'amount',
        label: 'AMOUNT',
        hideOnMobile: true,
        render: amountRenderer,
    },
    {
        key: 'status',
        label: 'STATUS',
        hideOnMobile: true,
        render: statusRenderer,
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

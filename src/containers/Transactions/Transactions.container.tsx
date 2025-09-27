import { Column, Container, ReusableTable } from '@components';
import type { Transaction } from '@data';
import { transactionsData } from '@data';

import { DescRenderer } from './subcomponents';

const schema: Column<Transaction>[] = [
    {
        key: 'person',
        label: 'TRANSACTION',
        formatter: (data: Transaction) => <DescRenderer data={data} />,
    },
    {
        key: 'date',
        category: 'date',
        label: 'DATE & TIME',
    },
    {
        key: 'amount',
        category: 'amount',
        label: 'AMOUNT',
        hideOnMobile: true,
    },
    {
        key: 'status',
        category: 'status',
        label: 'STATUS',
        hideOnMobile: true,
    },
];

export const Transactions = () => (
    <Container
        heading="Transactions"
        caption="This is a list of latest transactions."
    >
        <ReusableTable data={transactionsData} columns={schema} />
    </Container>
);

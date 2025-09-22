import type { Transaction } from '@components';

// The List of transactions in Themesberg
export const transactionsData: Transaction[] = [
    {
        person: 'Bonnie Green',
        date: "2021-04-23T00:00:00Z",
        amount: 2300,
        status: 'Completed',
    },
    {
        person: 'Bonnie Green',
        date: "2021-04-23T00:00:00Z",
        amount: -670,
        status: 'Completed',
    },
    {
        person: 'Jese Leos',
        date: "2021-04-18T00:00:00Z",
        amount: 234,
        status: 'Cancelled',
    },
    {
        person: 'Bonnie Green',
        date: "2021-04-15T00:00:00Z",
        amount: 5000,
        status: 'In Progress',
    },
    {
        person: 'Jese Leos',
        date: "2021-04-15T00:00:00Z",
        amount: 2300,
        status: 'In Progress',
    },
    {
        person: 'THEMESBERG LLC',
        date: "2021-04-11T00:00:00Z",
        amount: 280,
        status: 'Completed',
    },
];

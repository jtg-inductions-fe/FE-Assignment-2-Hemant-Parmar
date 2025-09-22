export type Transaction = {
    person: string;
    date: string; // improve later to Date object
    amount: number;
    status: 'Completed' | 'In Progress' | 'Cancelled';
};

export type TransactionProps = {
    data: Transaction[];
};

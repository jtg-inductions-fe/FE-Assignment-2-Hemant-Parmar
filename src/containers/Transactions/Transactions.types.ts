export type Transaction = {
    person: string;
    date: string;
    amount: number;
    status: 'Completed' | 'In Progress' | 'Cancelled';
};

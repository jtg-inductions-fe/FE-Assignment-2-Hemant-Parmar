import { ReactNode } from 'react';

export type Category = 'date' | 'amount' | 'status';

export type Column<T> =
    | {
          key: keyof T;
          category: Category; // If category is assign there should be no formatter
          label: string;
          hideOnMobile?: boolean;
      }
    | {
          key: keyof T;
          label: string;
          formatter: (data: T) => ReactNode;
          hideOnMobile?: boolean;
      };

export type ReusableTableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

export type Status = 'Completed' | 'In Progress' | 'Cancelled';

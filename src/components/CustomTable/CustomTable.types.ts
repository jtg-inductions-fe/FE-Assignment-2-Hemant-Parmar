export type RowData = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  money: number;
}

export type CustomTableProps = {
    heading: string;
  users: RowData[];
}
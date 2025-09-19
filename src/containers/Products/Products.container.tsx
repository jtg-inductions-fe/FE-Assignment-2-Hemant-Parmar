import { CustomTable } from '@components';

import type { RowData } from '@components';
import { Grid2 } from '@mui/material';

const users: RowData[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://i.pravatar.cc/40?img=1',
        money: 65,
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: 'https://i.pravatar.cc/40?img=2',
        money: 120,
    },
    {
        id: 3,
        name: 'Michael Lee',
        email: 'michael@example.com',
        avatar: 'https://i.pravatar.cc/40?img=3',
        money: 85,
    },
];

export const Products = () => {
    return (
        <Grid2 size={{ xs: 12, sm: 9}}>
            <CustomTable users={users} heading='Top Products'/>
        </Grid2>
    );
};

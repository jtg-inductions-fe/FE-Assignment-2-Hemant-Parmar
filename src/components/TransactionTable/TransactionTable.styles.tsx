import { Chip, useTheme } from '@mui/material';
import { Transaction } from './TransactionTable.types';

export const StatusChip = ({ label }: { label: Transaction['status'] }) => {
    const theme = useTheme();

    return (
        <Chip
            label={label}
            size='small'
            sx={{
                backgroundColor:
                    label === 'Completed'
                        ? theme.palette.success.main
                        : label === 'In Progress'
                          ? theme.palette.info.main
                          : theme.palette.error.main,
                color:
                    label === 'Completed'
                        ? theme.palette.success.contrastText
                        : label === 'In Progress'
                          ? theme.palette.info.contrastText
                          : theme.palette.error.contrastText,
            }}
        />
    );
};

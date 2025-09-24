import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Chip } from '@mui/material';
import { Transaction } from '@containers';

export const HeadCellText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
}));

export const StatusChip = styled(Chip)<{ label: Transaction['status'] }>(
    ({ theme, label }) => ({
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
        ...theme.typography.caption,
    }),
);

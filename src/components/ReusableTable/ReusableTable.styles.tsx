import { Chip, Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { Status } from './ReusableTable.types';

export const HeadCellText = styled(Typography)(
    ({
        theme: {
            typography: { subtitle1, fontWeightMedium },
            palette: { text },
        },
    }) => ({
        fontSize: subtitle1.fontSize,
        fontWeight: fontWeightMedium,
        color: text.secondary,
    }),
);

// Function to get chip colors based on status
const getStatusColors = (
    { palette: { success, info, error } }: Theme,
    status: Status,
) => {
    switch (status) {
        case 'Completed':
            return {
                backgroundColor: success.main,
                color: success.contrastText,
            };
        case 'In Progress':
            return {
                backgroundColor: info.main,
                color: info.contrastText,
            };
        default: // 'Cancelled'
            return {
                backgroundColor: error.main,
                color: error.contrastText,
            };
    }
};

export const StatusChip = styled(Chip)<{ label: Status }>(
    ({ theme, label }) => ({
        ...getStatusColors(theme, label),
        ...theme.typography.caption,
    }),
);

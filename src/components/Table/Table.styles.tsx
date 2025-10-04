import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRow = styled(TableRow)<{ showDivider?: boolean }>(
    ({ theme, showDivider }) => ({
        '& td': {
            borderBottom: showDivider
                ? `1px solid ${theme.palette.divider}`
                : null,
        },
    }),
);

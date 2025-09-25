import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { FlexBoxProps } from './ErrorContainer.types';

export const FlexBox = styled(Box)(
    ({ gap = 0, alignItems = 'center' }: FlexBoxProps) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: gap,
        alignItems: alignItems,
    }),
);

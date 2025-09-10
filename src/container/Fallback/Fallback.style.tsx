import { Box, styled } from '@mui/material';

import { FlexBoxProps } from './Fallback.type';

export const FlexBox = styled(Box)(
    ({ gap = 0, alignItems = 'center' }: FlexBoxProps) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: gap,
        alignItems: alignItems,
    }),
);

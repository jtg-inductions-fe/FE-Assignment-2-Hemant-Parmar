import { TooltipProps } from 'recharts';
import { Paper, Typography, Box, useTheme } from '@mui/material';

import { CustomPayload } from './CustomTooltip.types';

export const CustomTooltip = ({
    active,
    payload,
}: TooltipProps<number, string> & { payload?: CustomPayload[] }) => {
    const theme = useTheme();

    if (active && payload && payload.length) {
        return (
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.paper,
                    position: 'relative',
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.2))', // single shadow for whole shape
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: 16,
                        height: 16,
                        backgroundColor: theme.palette.background.paper,
                    },
                }}
            >
                <Box>
                    <Typography variant="subtitle1" color="text.secondary">
                        {payload[0].payload.dateFull}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        display={'flex'}
                        alignItems={'center'}
                        gap={1}
                        mt={1}
                    >
                        {/* The dot in the tooltip */}
                        <Box
                            width="10px"
                            height="10px"
                            borderRadius="5px"
                            bgcolor={theme.palette.primary.main}
                        />
                        Sales:
                        <Typography
                            component="span"
                            fontWeight="bold"
                            color="text.primary"
                        >
                            ${payload[0].value / 1000}k
                        </Typography>
                    </Typography>
                </Box>
            </Paper>
        );
    }

    return null;
};

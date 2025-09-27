import { TooltipProps } from 'recharts';

import { Box, Typography, useTheme } from '@mui/material';

import { TooltipPaper } from './Tooltip.styles';
import { Payload } from './Tooltip.types';

export const Tooltip = ({
    active,
    payload,
}: TooltipProps<number, string> & { payload?: Payload[] }) => {
    const {
        spacing,
        palette: { primary },
    } = useTheme();

    if (active && payload && payload.length) {
        return (
            <TooltipPaper elevation={0} role="tooltip">
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
                            width={spacing(3)}
                            height={spacing(3)}
                            borderRadius={spacing(2)}
                            bgcolor={primary.main}
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
            </TooltipPaper>
        );
    }

    return null;
};

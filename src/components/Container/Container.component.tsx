import {
    Box,
    Container as MuiContainer,
    Paper,
    Typography,
} from '@mui/material';

import type { ContainerProps } from './Container.types';

export const Container = ({
    heading,
    caption,
    children,
    icon,
    ...rest
}: ContainerProps) => (
    <MuiContainer component="section" maxWidth="xl" {...rest}>
        <Paper sx={{ p: 6, borderRadius: 4 }}>
            <Box mb={3}>
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="h2">{heading}</Typography>
                    {icon}
                </Box>
                {caption && (
                    <Typography variant="body2" color="text.secondary">
                        {caption}
                    </Typography>
                )}
            </Box>
            {children}
        </Paper>
    </MuiContainer>
);

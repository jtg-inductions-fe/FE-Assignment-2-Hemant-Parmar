import { Box, Container, Paper, Typography } from '@mui/material';

import type { CustomContainerProps } from './CustomContainer.types';

export const CustomContainer = ({
    heading,
    caption,
    children,
    icon,
    ...rest
}: CustomContainerProps) => (
    <Container maxWidth="xl" {...rest}>
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
    </Container>
);

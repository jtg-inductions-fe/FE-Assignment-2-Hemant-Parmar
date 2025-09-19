import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { CustomContainerProps } from './CustomContainer.types';

export const CustomContainer: React.FC<CustomContainerProps> = ({
    heading,
    caption,
    children,
    Icon,
    ...rest
}) => {
    return (
        <Container maxWidth="xl" {...rest}>
            <Paper sx={{ p: 6, borderRadius: 4 }}>
                {(heading || caption) && (
                    <Box mb={3}>
                        <Box display="flex" alignItems="center" gap={2}>
                            {heading && (
                                <Typography variant="h2">{heading}</Typography>
                            )}
                            {Icon && <Icon fontSize="small" color="inherit" />}
                        </Box>
                        {caption && (
                            <Typography variant="body2" color="text.secondary">
                                {caption}
                            </Typography>
                        )}
                    </Box>
                )}
                {children}
            </Paper>
        </Container>
    );
};

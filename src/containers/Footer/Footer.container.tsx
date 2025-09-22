import { CustomContainer } from '@components';
import { footerConfig } from '@data';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <CustomContainer
            customPadding
            paperProps={{
                sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { sm: 'center' },
                    gap: { xs: 4, sm: 0 },
                },
            }}
        >
            <Typography variant="body1" color="text.secondary">
                &copy; 2021 Themesberg, LLC. All rights reserved.
            </Typography>
            <List disablePadding sx={{ display: 'flex', gap: 6 }}>
                {footerConfig.links.map(({ url, iconURL, ariaLabel }) => (
                    <ListItem key={url} disablePadding sx={{ width: 'auto' }}>
                        <ListItemButton
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={ariaLabel}
                            disableGutters
                        >
                            <Box
                                component="img"
                                src={iconURL}
                                height={24}
                                width={24}
                                alt=""
                                aria-hidden="true"
                            ></Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </CustomContainer>
    );
};

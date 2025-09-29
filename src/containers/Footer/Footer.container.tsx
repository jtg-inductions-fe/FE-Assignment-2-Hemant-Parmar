import {
    Box,
    Container,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from '@mui/material';

import { footerConfig } from '@data';

import { FooterBox } from './Footer.styles';

export const Footer = () => (
    <Container maxWidth="xl" sx={{ p: { xs: 2, sm: 3 } }}>
        <FooterBox component="footer" bgcolor="background.paper">
            <Typography variant="body1" color="text.secondary">
                {footerConfig.description}
            </Typography>
            <List
                disablePadding
                sx={{ display: 'flex', gap: { xs: 6, sm: 2, md: 4 } }}
            >
                {footerConfig.links.map(({ url, iconURL, ariaLabel }) => (
                    <ListItem key={url} disablePadding sx={{ width: 'auto' }}>
                        <ListItemButton
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={ariaLabel}
                            sx={{ px: { xs: 1, sm: 2, md: 3 } }}
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
        </FooterBox>
    </Container>
);

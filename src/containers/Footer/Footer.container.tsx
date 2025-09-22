import {
    CustomContainer,
    DribbleIcon,
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
} from '@components';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <CustomContainer sx={{ p: { sm: 3, xs: 2 } }}>
            <Typography variant="body1" color="text.secondary">
                &copy; 2021 Themesberg, LLC. All rights reserved.
            </Typography>
            <List disablePadding sx={{ display: 'flex', gap: 6 }}>
                <ListItem>
                    <ListItemButton
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <TwitterIcon height={24} width={24}></TwitterIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <FacebookIcon height={24} width={24}></FacebookIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <DribbleIcon height={24} width={24}></DribbleIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <GithubIcon height={24} width={24}></GithubIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </CustomContainer>
    );
};

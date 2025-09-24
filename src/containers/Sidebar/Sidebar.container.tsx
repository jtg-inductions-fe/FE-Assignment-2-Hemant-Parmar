import { Link, useLocation } from 'react-router-dom';

import { Box, Divider, IconButton, ListItem, Toolbar } from '@mui/material';
import List from '@mui/material/List';

import { NavAccordion } from '@components';
import { NavButton } from '@components';
import { NavAccordionProps } from '@components';
import { NavButtonProps } from '@components';
import { navConfig } from '@data';

type NavElementProps = NavAccordionProps | NavButtonProps;

import { Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FooterList, NavBox } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ mobileOpen, handleDrawerClose }: SidebarProps) => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('sm'));
    const location = useLocation();

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: theme.custom.drawerWidth.desktop },
                flexShrink: { sm: 0 },
            }}
            aria-label="Navigation sidebar"
        >
            <Drawer
                anchor="left"
                variant={match ? 'permanent' : 'temporary'}
                open={match ? true : mobileOpen}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
            >
                <NavBox>
                    <Toolbar />

                    {navConfig.lists.map((list, index) => (
                        <Box key={index}>
                            {index > 0 && <Divider />}
                            <List aria-label={`Nav section ${index + 1}`}>
                                {list.map(
                                    (element: NavElementProps, elementIndex) =>
                                        'items' in element ? (
                                            <NavAccordion
                                                title={element.title}
                                                icon={element.icon}
                                                items={element.items}
                                                key={elementIndex}
                                            />
                                        ) : 'route' in element ? (
                                            <NavButton
                                                title={element.title}
                                                icon={element.icon}
                                                route={element.route}
                                                count={element.count}
                                                key={elementIndex}
                                                active={
                                                    location.pathname ===
                                                    element.route
                                                }
                                            />
                                        ) : null,
                                )}
                            </List>
                        </Box>
                    ))}

                    {/* At the bottom  */}
                    <FooterList>
                        {navConfig.footer.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{ width: 'auto' }}
                                disablePadding
                            >
                                <IconButton
                                    component={Link}
                                    to={item.route}
                                    aria-label={`${item.title}`}
                                >
                                    <item.icon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </FooterList>
                </NavBox>
            </Drawer>
        </Box>
    );
};

import { Link } from 'react-router-dom';

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
                variant={match ? 'persistent' : 'temporary'}
                open={match ? true : mobileOpen}
                onClose={handleDrawerClose}
            >
                <NavBox>
                    <Toolbar></Toolbar>

                    {navConfig.lists.map((list, index) => (
                        <Box key={index}>
                            <Divider></Divider>
                            <List>
                                {list.map(
                                    (element: NavElementProps, elementIndex) =>
                                        'items' in element ? (
                                            <NavAccordion
                                                title={element.title}
                                                Icon={element.Icon}
                                                items={element.items}
                                                customExpandIcon={
                                                    element.customExpandIcon
                                                }
                                                key={elementIndex}
                                            />
                                        ) : 'route' in element ? (
                                            <NavButton
                                                title={element.title}
                                                Icon={element.Icon}
                                                route={element.route}
                                                count={element.count}
                                                key={elementIndex}
                                            />
                                        ) : null,
                                )}
                            </List>
                        </Box>
                    ))}

                    {/* At the bottom  */}
                    <Divider sx={{ marginTop: 'auto' }}></Divider>
                    <FooterList>
                        {navConfig.footer.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{ width: 'auto' }}
                                disablePadding
                            >
                                <IconButton
                                    component={Link}
                                    to={`/${item.route}`}
                                    aria-label={`${item.route}`}
                                >
                                    {<item.Icon fontSize="medium" />}
                                </IconButton>
                            </ListItem>
                        ))}
                    </FooterList>
                </NavBox>
            </Drawer>
        </Box>
    );
};

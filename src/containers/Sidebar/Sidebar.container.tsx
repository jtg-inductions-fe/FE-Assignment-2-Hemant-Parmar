import { Link, useLocation } from 'react-router-dom';

import { Box, Divider, IconButton, ListItem } from '@mui/material';
import { Drawer, List, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { NavAccordion, NavButton } from '@components';
import { navConfig } from '@data';

import { FooterList, NavBox } from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ mobileOpen, handleDrawerClose }: SidebarProps) => {
    const {
        breakpoints,
        custom: { drawerWidth },
    } = useTheme();
    const match = useMediaQuery(breakpoints.up('sm'));
    const location = useLocation();

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerWidth.desktop },
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
                sx={{
                    [`& .MuiDrawer-paper`]: {
                        width: {
                            xs: drawerWidth['mobile'],
                            sm: drawerWidth['desktop'],
                        },
                        boxSizing: 'border-box',
                        position: 'sticky',
                        top: 0,
                        height: '100vh',
                        overflowY: 'clip',
                    },
                }}
            >
                <NavBox>
                    {navConfig.lists.map((list, index) => (
                        <Box key={index}>
                            {index > 0 && <Divider />}
                            <List aria-label={`Nav section ${index + 1}`}>
                                {list.map((element, elementIndex) =>
                                    'items' in element ? (
                                        <NavAccordion
                                            title={element.title}
                                            icon={<element.icon />}
                                            items={element.items}
                                            key={elementIndex}
                                        />
                                    ) : 'route' in element ? (
                                        <NavButton
                                            title={element.title}
                                            icon={
                                                <element.icon
                                                    color={
                                                        location.pathname ===
                                                        element.route
                                                            ? 'primary'
                                                            : 'inherit'
                                                    }
                                                />
                                            }
                                            route={element.route}
                                            count={
                                                'count' in element
                                                    ? element.count
                                                    : undefined
                                            }
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

import { NavAccordion } from 'component';
import { NavButton } from 'component';
import { NavAccordionProps } from 'component/NavAccordion';
import { NavButtonProps } from 'component/NavButton';
import { navConfig } from 'data';
import { Link } from 'react-router-dom';

import { Box, Divider, IconButton, ListItem, Toolbar } from '@mui/material';
import List from '@mui/material/List';

type NavElementProps = NavAccordionProps | NavButtonProps;

import { DRAWER_WIDTH } from 'constant/themeConstant';

import { Drawer, useMediaQuery } from '@mui/material';

import { theme } from '@theme';

import { FooterList } from './Sidebar.style';

interface SidebarProps {
    mobileOpen: boolean;
    handleDrawerClose: () => void;
}

export function Sidebar({ mobileOpen, handleDrawerClose }: SidebarProps) {
    const match = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box
            component="nav"
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label="Navigation sidebar"
        >
            <Drawer
                variant={match ? 'permanent' : 'temporary'}
                open={match ? true : mobileOpen}
                onClose={handleDrawerClose}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
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
                </Box>
            </Drawer>
        </Box>
    );
}

import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupportIcon from '@mui/icons-material/Support';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Drawer,
    Toolbar,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 250;

function MyListItem({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <ListItemButton href={`/${title}`}>
            <ListItemIcon>{children}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    );
}

function MyAccordion({
    title,
    expandIcon = true,
    children,
}: {
    title: string;
    expandIcon?: boolean;
    children: React.ReactNode;
}) {
    return (
        <Accordion
            sx={{
                '&:before': {
                    display: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={expandIcon ? <ExpandMoreIcon /> : null}
            >
                <ListItem>
                    <ListItemIcon>{children}</ListItemIcon>
                    <ListItemText primary={title} />
                </ListItem>
            </AccordionSummary>
            {/* Keeping details same for all the components, for now  */}
            <AccordionDetails>
                <MyListItem title="Product List">
                    <CheckBoxOutlineBlankIcon />
                </MyListItem>
                <MyListItem title="Billing">
                    <CheckBoxOutlineBlankIcon />
                </MyListItem>
                <MyListItem title="Invoice">
                    <CheckBoxOutlineBlankIcon />
                </MyListItem>
            </AccordionDetails>
        </Accordion>
    );
}

const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Toolbar></Toolbar>
        <Divider></Divider>
        <List>
            <MyAccordion title="Overview" expandIcon={false}>
                <PieChartIcon />
            </MyAccordion>
            <MyAccordion title="Pages">
                <ContactPageIcon />
            </MyAccordion>
            <MyAccordion title="Sales">
                <ShoppingBagIcon />
            </MyAccordion>
        </List>
        <List>
            <MyListItem title="Docs">
                <AssignmentIcon />
            </MyListItem>
            <MyListItem title="Components">
                <SubscriptionsIcon />
            </MyListItem>
            <MyListItem title="Help">
                <SupportIcon />
            </MyListItem>
        </List>

        {/* At the bottom  */}
        <Divider sx={{ marginTop: 'auto' }} />
        <List>
            <ListItem>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
            </ListItem>
        </List>
    </Box>
);

interface SidebarProps {
    mobileOpen: boolean;
    handleDrawerClose: () => void;
}

export default function Sidebar({
    mobileOpen,
    handleDrawerClose,
}: SidebarProps) {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="Navigation sidebar"
        >
            {/* Only for mobile */}

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerClose}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>

            {/* Only for tablet and desktop  */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

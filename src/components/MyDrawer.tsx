import { Link, useLocation } from 'react-router-dom';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockIcon from '@mui/icons-material/Lock';
import Looks3Icon from '@mui/icons-material/Looks3';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import PieChartIcon from '@mui/icons-material/PieChart';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupportIcon from '@mui/icons-material/Support';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Divider, IconButton, Toolbar } from '@mui/material';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';

import { COLORS } from '@constant';

import MyListItem from './MyListItem';
import MyAccordion from './NavAccordion';
import OverviewButton from './OverviewButton';

const MyDrawer = () => {
    const location = useLocation();
    const overviewColor: 'primary' | 'inherit' =
        location.pathname === '/' ? 'primary' : 'inherit';
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar></Toolbar>
            <Divider></Divider>
            <List>
                <OverviewButton color={overviewColor}>
                    <PieChartIcon color={overviewColor} />
                </OverviewButton>
                <MyAccordion title="Pages">
                    <ContactPageIcon />
                </MyAccordion>
                <MyAccordion title="Sales">
                    <ShoppingBagIcon />
                </MyAccordion>
                <MyAccordion
                    title="Messages"
                    customExpandIcon={<Looks3Icon color="info" />}
                >
                    <MoveToInboxSharpIcon />
                </MyAccordion>
                <MyAccordion title="Authentication">
                    <LockIcon />
                </MyAccordion>
            </List>

            <Divider></Divider>
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
            {/* <Divider sx={{ marginTop: 'auto' , opacity:0}} />  It will make more sense to have it visible */}
            <List
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    background: COLORS.WHITE,
                }}
            >
                <ListItemIcon>
                    <IconButton component={Link} to="/filter">
                        <TuneIcon />
                    </IconButton>
                </ListItemIcon>
                <ListItemIcon>
                    <IconButton component={Link} to="/explore">
                        <PublicOutlinedIcon />
                    </IconButton>
                </ListItemIcon>
                <ListItemIcon>
                    <IconButton component={Link} to="/settings">
                        <SettingsOutlinedIcon />
                    </IconButton>
                </ListItemIcon>
            </List>
        </Box>
    );
};

export default MyDrawer;

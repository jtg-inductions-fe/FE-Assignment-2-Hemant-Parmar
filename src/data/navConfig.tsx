import { NavAccordionProps } from 'component/NavAccordion';
import { NavButtonProps } from 'component/NavButton';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import PieChartIcon from '@mui/icons-material/PieChart';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupportIcon from '@mui/icons-material/Support';
import TuneIcon from '@mui/icons-material/Tune';

interface NavConfig {
    lists: Array<Array<NavAccordionProps | NavButtonProps>>;
    footer: Array<{ route: string; icon: React.ReactNode }>;
}

export const navConfig: NavConfig = {
    lists: [
        [
            {
                title: 'Overview',
                route: '',
                icon: <PieChartIcon />,
            },
            {
                title: 'Pages',
                icon: <ContactPageIcon />,
                items: [
                    { title: 'Overview', route: '' },
                    { title: 'Docs', route: 'docs' },
                ],
            },
            {
                title: 'Sales',
                icon: <ShoppingBagIcon />,
                items: [
                    { title: 'Product List', route: 'product-list' },
                    { title: 'Billing', route: 'billing' },
                    { title: 'Invoice', route: 'invoice' },
                ],
            },
            {
                title: 'Messages',
                route: 'messages',
                icon: <MoveToInboxSharpIcon />,
                count: 3,
            },
            {
                title: 'Authentication',
                icon: <LockIcon />,
                items: [
                    { title: 'Login', route: 'login' },
                    { title: 'SignUp', route: 'signup' },
                ],
            },
        ],
        [
            {
                title: 'Docs',
                route: 'docs',
                icon: <AssignmentIcon />,
            },
            {
                title: 'Components',
                route: 'components',
                icon: <SubscriptionsIcon />,
            },
            {
                title: 'Help',
                route: 'help',
                icon: <SupportIcon />,
            },
        ],
    ],
    footer: [
        {
            route: 'filter',
            icon: <TuneIcon />,
        },
        {
            route: 'explore',
            icon: <PublicOutlinedIcon />,
        },
        {
            route: 'settings',
            icon: <SettingsOutlinedIcon />,
        },
    ],
};

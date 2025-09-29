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

import { ROUTES } from '@constants';

export const navConfig = {
    lists: [
        [
            {
                title: 'Overview',
                route: ROUTES.ROOT,
                icon: PieChartIcon,
            },
            {
                title: 'Pages',
                icon: ContactPageIcon,
                items: [
                    { title: 'About Us', route: ROUTES.ABOUT },
                    { title: 'Contacts', route: ROUTES.CONTACTS },
                    { title: 'Our Team', route: ROUTES.TEAM },
                    { title: 'Join Us', route: ROUTES.CAREER },
                ],
            },
            {
                title: 'Sales',
                icon: ShoppingBagIcon,
                items: [
                    { title: 'Product List', route: ROUTES.PRODUCT_LIST },
                    { title: 'Billing', route: ROUTES.BILLING },
                    { title: 'Invoice', route: ROUTES.INVOICE },
                ],
            },
            {
                title: 'Messages',
                route: ROUTES.MESSAGES,
                icon: MoveToInboxSharpIcon,
                count: 3,
            },
            {
                title: 'Authentication',
                icon: LockIcon,
                items: [
                    { title: 'Login', route: ROUTES.LOGIN },
                    { title: 'Sign Up', route: ROUTES.SIGNUP },
                ],
            },
        ],
        [
            {
                title: 'Docs',
                route: ROUTES.DOCS,
                icon: AssignmentIcon,
            },
            {
                title: 'Components',
                route: ROUTES.COMPONENTS,
                icon: SubscriptionsIcon,
            },
            {
                title: 'Help',
                route: ROUTES.HELP,
                icon: SupportIcon,
            },
        ],
    ],
    footer: [
        {
            title: 'filter',
            route: ROUTES.FILTER,
            icon: TuneIcon,
        },
        {
            title: 'explore',
            route: ROUTES.EXPLORE,
            icon: PublicOutlinedIcon,
        },
        {
            title: 'settings',
            route: ROUTES.SETTINGS,
            icon: SettingsOutlinedIcon,
        },
    ],
};

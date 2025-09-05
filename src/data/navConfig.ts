import { NavAccordionProps } from 'component/NavAccordion';
import { NavButtonProps } from 'component/NavButton';

import { SvgIconComponent } from '@mui/icons-material';
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
    footer: Array<{ route: string; Icon: SvgIconComponent }>;
}

export const navConfig: NavConfig = {
    lists: [
        [
            {
                title: 'Overview',
                route: '',
                Icon: PieChartIcon,
            },
            {
                title: 'Pages',
                Icon: ContactPageIcon,
                items: [
                    { title: 'Overview', route: '' },
                    { title: 'Docs', route: 'docs' },
                    { title: 'Components', route: 'components' },
                    { title: 'Help', route: 'help' },
                ],
            },
            {
                title: 'Sales',
                Icon: ShoppingBagIcon,
                items: [
                    { title: 'Product List', route: 'product-list' },
                    { title: 'Billing', route: 'billing' },
                    { title: 'Invoice', route: 'invoice' },
                ],
            },
            {
                title: 'Messages',
                route: 'messages',
                Icon: MoveToInboxSharpIcon,
                count: 3,
            },
            {
                title: 'Authentication',
                Icon: LockIcon,
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
                Icon: AssignmentIcon,
            },
            {
                title: 'Components',
                route: 'components',
                Icon: SubscriptionsIcon,
            },
            {
                title: 'Help',
                route: 'help',
                Icon: SupportIcon,
            },
        ],
    ],
    footer: [
        {
            route: 'filter',
            Icon: TuneIcon,
        },
        {
            route: 'explore',
            Icon: PublicOutlinedIcon,
        },
        {
            route: 'settings',
            Icon: SettingsOutlinedIcon,
        },
    ],
};

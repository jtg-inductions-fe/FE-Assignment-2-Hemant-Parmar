import type { NavAccordionProps } from 'components/NavAccordion';
import type { NavButtonProps } from 'components/NavButton';

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

import { ROUTES } from '@constants';

export interface NavConfig {
    lists: Array<Array<NavAccordionProps | NavButtonProps>>;
    footer: Array<{ title: string; route: string; Icon: SvgIconComponent }>;
}

export const navConfig: NavConfig = {
    lists: [
        [
            {
                title: 'Overview',
                route: ROUTES.ROOT,
                Icon: PieChartIcon,
            },
            {
                title: 'Pages',
                Icon: ContactPageIcon,
                items: [
                    { title: 'Overview', route: ROUTES.ROOT },
                    { title: 'Docs', route: ROUTES.DOCS },
                    { title: 'Components', route: ROUTES.COMPONENTS },
                    { title: 'Help', route: ROUTES.HELP },
                ],
            },
            {
                title: 'Sales',
                Icon: ShoppingBagIcon,
                items: [
                    { title: 'Product List', route: ROUTES.PRODUCT_LIST },
                    { title: 'Billing', route: ROUTES.BILLING },
                    { title: 'Invoice', route: ROUTES.INVOICE },
                ],
            },
            {
                title: 'Messages',
                route: ROUTES.MESSAGES,
                Icon: MoveToInboxSharpIcon,
                count: 3,
            },
            {
                title: 'Authentication',
                Icon: LockIcon,
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
                Icon: AssignmentIcon,
            },
            {
                title: 'Components',
                route: ROUTES.COMPONENTS,
                Icon: SubscriptionsIcon,
            },
            {
                title: 'Help',
                route: ROUTES.HELP,
                Icon: SupportIcon,
            },
        ],
    ],
    footer: [
        {
            title: "filter",
            route: ROUTES.FILTER,
            Icon: TuneIcon,
        },
        {
            title: "explore",
            route: ROUTES.EXPLORE,
            Icon: PublicOutlinedIcon,
        },
        {
            title: "settings",
            route: ROUTES.SETTINGS,
            Icon: SettingsOutlinedIcon,
        },
    ],
};

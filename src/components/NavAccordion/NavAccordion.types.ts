import { SvgIconComponent } from '@mui/icons-material';

export type NavAccordionItems = {
    title: string;
    route?: string;
};

export type NavAccordionProps = {
    title: string;
    icon: SvgIconComponent;
    items?: NavAccordionItems[];
};

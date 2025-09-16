import { SvgIconComponent } from '@mui/icons-material';

interface NavAccordionItems {
    title: string;
    route?: string;
}

export interface NavAccordionProps {
    title: string;
    Icon: SvgIconComponent;
    items?: NavAccordionItems[];
    customExpandIcon?: SvgIconComponent;
}

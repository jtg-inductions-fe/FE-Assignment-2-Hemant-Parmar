interface NavAccordionItems {
    title: string;
    route?: string;
}

export interface NavAccordionProps {
    title: string;
    icon: React.ReactNode;
    items?: NavAccordionItems[];
    customExpandIcon?: React.ReactNode;
}

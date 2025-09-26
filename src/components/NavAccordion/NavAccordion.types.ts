import { ReactElement } from 'react';

export type NavAccordionItems = {
    title: string;
    route?: string;
};

export type NavAccordionProps = {
    title: string;
    icon: ReactElement;
    items?: NavAccordionItems[];
};

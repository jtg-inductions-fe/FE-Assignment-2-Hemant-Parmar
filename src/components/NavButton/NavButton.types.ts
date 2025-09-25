import { ReactElement } from 'react';
export interface NavButtonProps {
    title: string;
    route: string;
    active?: boolean;
    count?: number;
    icon: ReactElement;
}

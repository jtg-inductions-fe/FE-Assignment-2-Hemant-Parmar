import { MouseEvent, ReactNode } from 'react';

export type PrimaryButtonProps = {
    route?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    content: ReactNode;
};

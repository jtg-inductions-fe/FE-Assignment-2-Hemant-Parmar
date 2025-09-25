import { CSSProperties } from 'react';

export type FlexBoxProps = {
    gap?: number | string;
    alignItems?: CSSProperties['alignItems'];
};

export type ErrorContainerProps = {
    imageURL: string;
    title: string;
    desc: string;
    alt?: string;
};

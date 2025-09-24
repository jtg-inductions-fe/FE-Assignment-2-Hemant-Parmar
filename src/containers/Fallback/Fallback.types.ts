import { CSSProperties } from 'react';

export type FlexBoxProps = {
    gap?: number | string;
    alignItems?: CSSProperties['alignItems'];
};

export type FallbackProps = {
    imageURL: string;
    title: string;
    desc: string;
    alt?: string;
};

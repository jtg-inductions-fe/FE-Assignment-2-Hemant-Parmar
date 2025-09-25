import { ReactElement } from 'react';

import { ContainerProps } from '@mui/material';

export type CustomContainerProps = ContainerProps & {
    heading: string;
    caption?: string;
    icon?: ReactElement;
};

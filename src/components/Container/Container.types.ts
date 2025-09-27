import { ReactElement } from 'react';

import { ContainerProps as MuiContainerProps } from '@mui/material';

export type ContainerProps = MuiContainerProps & {
    heading: string;
    caption?: string;
    icon?: ReactElement;
};

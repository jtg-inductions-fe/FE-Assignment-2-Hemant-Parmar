import { SvgIconComponent } from '@mui/icons-material';
import { ContainerProps } from '@mui/material';

export type CustomContainerProps = ContainerProps & {
    heading?: string;
    caption?: string;
    Icon?: SvgIconComponent;
};

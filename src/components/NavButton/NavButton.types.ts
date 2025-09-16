import { SvgIconComponent } from '@mui/icons-material';

export interface NavButtonProps {
    title: string;
    route?: string;
    color?: 'primary' | 'inherit';
    count?: number;
    Icon: SvgIconComponent;
}

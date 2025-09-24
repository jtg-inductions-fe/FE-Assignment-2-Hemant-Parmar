import { SvgIconComponent } from '@mui/icons-material';

export interface NavButtonProps {
    title: string;
    route: string;
    active?: boolean;
    count?: number;
    icon: SvgIconComponent;
}

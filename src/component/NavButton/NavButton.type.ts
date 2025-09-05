export interface NavButtonProps {
    title: string;
    route?: string;
    color?: 'primary' | 'inherit';
    icon: React.ReactNode;
    count?: number;
}

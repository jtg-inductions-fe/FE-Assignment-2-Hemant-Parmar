import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeadCellText = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary,
}));

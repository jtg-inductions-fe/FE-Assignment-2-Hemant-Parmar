import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.GREEN[500],
        contrastText: COLORS.COOL_GRAY[900],
    },
    secondary: {
        main: COLORS.WHITE,
    },
    grey: COLORS.COOL_GRAY,
    text: {
        primary: COLORS.COOL_GRAY[900],
        secondary: COLORS.COOL_GRAY[500],
    },
    success: {
        main: COLORS.GREEN[100],
        contrastText: COLORS.GREEN[800],
    },
    error: {
        main: COLORS.RED[200],
        contrastText: COLORS.RED[800],
    },
    info: {
        main: COLORS.BLUE[100],
        contrastText: COLORS.BLUE[800],
    },
    divider: COLORS.COOL_GRAY[200],
    background: {
        default: COLORS.COOL_GRAY[50],
        paper: COLORS.WHITE,
    },
    action: {
        hover: COLORS.GREEN[100],
        selected: COLORS.GREEN[100],
        active: COLORS.GREEN[200],
    },
};

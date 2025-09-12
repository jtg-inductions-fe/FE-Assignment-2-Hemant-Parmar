import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
        contrastText: COLORS.TEXT.PRIMARY,
    },
    secondary: {
        main: COLORS.SECONDARY,
    },
    grey: COLORS.GREY,
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
        contrastText: COLORS.SUCCESS.TEXT,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        contrastText: COLORS.ERROR.TEXT,
    },
    info: {
        main: COLORS.INFO.MAIN,
        contrastText: COLORS.INFO.TEXT,
    },
    divider: COLORS.DIVIDER,
    background: {
        default: COLORS.BACKGROUND.PRIMARY,
        paper: COLORS.SECONDARY,
    },
    action: {
        hover: COLORS.BACKGROUND.HOVER,
        selected: COLORS.BACKGROUND.HOVER,
        active: COLORS.BACKGROUND.ACTIVE,
    },
};

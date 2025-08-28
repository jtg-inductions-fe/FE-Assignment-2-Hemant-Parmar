import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    grey: COLORS.COOL_GRAY,
    text: {
        primary: COLORS.COOL_GRAY[900],
        secondary: COLORS.COOL_GRAY[500],
    },
    success: {
        main: COLORS.GREEN[800], // The Completed badge
    },
    warning: {
        main: COLORS.RED[800], // The Cancelled badge
    },
    info: {
        main: COLORS.BLUE[800], // The Progress badge
    },
};

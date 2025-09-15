import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { FONT_SIZES, HTML_FONT_SIZE } from '@constants';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['xl']),
        fontWeight: 700,
        lineHeight: 1.5,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(FONT_SIZES['xxl']),
            lineHeight: 1.3,
        },
    },
    h2: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['lg']),
        fontWeight: 700,
        lineHeight: 1.5,
    },
    h3: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['base']),
        fontWeight: 600,
        lineHeight: 1.5,
    },
    button: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['base']),
        fontWeight: 500,
        lineHeight: 1.5,
    },
    body1: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['base']),
        fontWeight: 400,
        lineHeight: 1.5,
    },
    body2: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['sm']),
        fontWeight: 400,
        lineHeight: 1.5,
    },
    subtitle1: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['xs']),
        fontWeight: 400,
        lineHeight: 1.5,
    },
    subtitle2: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['sm']),
        fontWeight: 400,
        lineHeight: 1.5,
    },
    overline: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['sm']),
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: '0.08em',
    },
    caption: {
        fontSize: typographyUtil.pxToRem(FONT_SIZES['xs']),
        fontWeight: 400,
        lineHeight: 1.5,
    },
});

export const typography = { typographyStyle, typographyUtil };

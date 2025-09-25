const COOL_GRAY = {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    500: '#6B7280',
    900: '#111827',
} as const;

const GREEN = {
    100: '#DEF7EC',
    500: '#0E9F6E',
    800: '#03543F',
} as const;

const RED = {
    200: '#FBD5D5',
    800: '#9B1C1C',
} as const;

const BLUE = {
    100: '#E1EFFE',
    800: '#1E429F',
} as const;

const WHITE = '#FFFFFF';

/**
 * Color palette used in the application.
 * @constant
 */
export const COLORS = {
    PRIMARY: {
        MAIN: GREEN[500],
    },
    SECONDARY: WHITE,
    TEXT: {
        PRIMARY: COOL_GRAY[900],
        SECONDARY: COOL_GRAY[500],
    },
    GREY: COOL_GRAY,
    SUCCESS: {
        MAIN: GREEN[100],
        TEXT: GREEN[800],
    },
    ERROR: {
        MAIN: RED[200],
        TEXT: RED[800],
    },
    INFO: {
        MAIN: BLUE[100],
        TEXT: BLUE[800],
    },
    BACKGROUND: {
        PRIMARY: COOL_GRAY[50],
        HOVER: COOL_GRAY[100],
        ACTIVE: COOL_GRAY[200],
    },
    DIVIDER: COOL_GRAY[200],
} as const;

/**
 * Type representing the keys of COLORS.
 */
export type Color = (typeof COLORS)[keyof typeof COLORS];

/**
 * Base font size in pixels.
 * @constant
 */
export const HTML_FONT_SIZE = 10;

/**
 * Used font sizes in pixels.
 * @constant
 */
export const FONT_SIZES = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 20,
    xl: 30,
    xxl: 48,
    xxxl: 72,
} as const;

/**
 * Type representing the keys of FONT_SIZES.
 */
export type FontSize = (typeof FONT_SIZES)[keyof typeof FONT_SIZES];

/**
 * Scaling factor used for spacing.
 * @constant
 */
export const SCALING_FACTOR = 4;

/**
 * Breakpoints to ensure responsiveness.
 * @constant
 */
export const BREAKPOINTS = {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
} as const;

/**
 * Type representing the keys of BREAKPOINTS.
 */
export type Breakpoint = (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];

const COOL_GRAY = {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
} as const;

const GREEN = {
    50: '#F3FAF7',
    100: '#DEF7EC',
    200: '#BCF0DA',
    300: '#84E1BC',
    400: '#31C48D',
    500: '#0E9F6E',
    600: '#057A55',
    700: '#046C4E',
    800: '#03543F',
    900: '#014737',
} as const;

const RED = {
    50: '#FDF2F2',
    100: '#FDE8E8',
    200: '#FBD5D5',
    300: '#F8B4B4',
    400: '#F98080',
    500: '#F05252',
    600: '#E02424',
    700: '#C81E1E',
    800: '#9B1C1C',
    900: '#771D1D',
} as const;

const BLUE = {
    50: '#EBF5FF',
    100: '#E1EFFE',
    200: '#C3DDFD',
    300: '#A4CAFE',
    400: '#76A9FA',
    500: '#3F83F8',
    600: '#1C64F2',
    700: '#1A56DB',
    800: '#1E429F',
    900: '#233876',
} as const;

const WHITE = '#FFFFFF';

/**
 * Color palette used in the application.
 * @constant
 */
export const COLORS = {
    COOL_GRAY,
    GREEN,
    RED,
    BLUE,
    WHITE,
};

/**
 * Base font size in pixels.
 * @constant
 */
export const HTML_FONT_SIZE = 16;

/**
 * Used font sizes in pixels.
 * @constant
 */
export const FONT_SIZES = {
    xs: 12,
    sm: 14,
    base: 16,
    xl: 20,
    '3xl': 30,
    '5xl': 48,
    '7xl': 72,
};

/**
 * Scaling factor used for spacing.
 * @constant
 */
export const SCALING_FACTOR = 4;

/**
 * Various routes used in the application.
 */
export const ROUTES = {
    ROOT: '/',
    NOTIFICATIONS: '/notifications',
    PRODUCTS: '/products',
    DOCS: '/docs',
    COMPONENTS: '/components',
    HELP: '/help',
    PRODUCT_LIST: '/product-list',
    BILLING: '/billing',
    INVOICE: '/invoice',
    LOGIN: '/login',
    SIGNUP: '/signup',
    FILTER: '/filter',
    EXPLORE: '/explore',
    SETTINGS: '/setting',
    MESSAGES: '/messages',
} as const;

/**
 * Type representing the keys of ROUTES.
 */
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Various slugs used in the application.
 * @constant
 */
export const SLUGS = {
    PRODUCT_ID: ':productId',
};

/**
 * Type representing the keys of ROUTES.
 */
export type Slug = (typeof SLUGS)[keyof typeof SLUGS];

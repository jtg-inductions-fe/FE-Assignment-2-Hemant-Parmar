/**
 * Various routes used in the application.
 */
export const ROUTES = {
    ROOT: '/',
    NOTIFICATIONS: '/notifications',
    PRODUCTS: '/products',
} as const;

/**
 * Type representing the keys of ROUTES.
 */
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Various query params used in the application.
 * @constant
 */
export const PARAMS = {
    PRODUCT_ID: 'productId',
};

/**
 * Type representing the keys of ROUTES.
 */
export type Param = (typeof PARAMS)[keyof typeof PARAMS];

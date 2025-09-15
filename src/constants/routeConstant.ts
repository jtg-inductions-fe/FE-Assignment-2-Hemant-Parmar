/**
 * Various routes used in the application.
 */
export const ROUTES = {
  ROOT: "/",
  NOTIFICATIONS: "/notifications",
  PRODUCTS: "/products",
} as const;

/**
 * Type representing the keys of ROUTES.
 */
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];


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
export type Slug = typeof ROUTES[keyof typeof ROUTES];
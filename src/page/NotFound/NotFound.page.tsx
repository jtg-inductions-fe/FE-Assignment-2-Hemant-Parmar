import { Fallback } from 'container';

import NotFoundImageURL from '@assets/images/404.svg';

export const NotFound = () => (
    <Fallback
        imageURL={NotFoundImageURL}
        title="Page not found"
        desc="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
    />
);

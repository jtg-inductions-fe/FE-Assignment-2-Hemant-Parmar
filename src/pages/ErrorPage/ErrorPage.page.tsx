import { Fallback } from '@containers';

import ErrorImageURL from '@assets/images/Error.svg';

export const ErrorPage = () => (
    <Fallback
        imageURL={ErrorImageURL}
        title="Something has gone seriously wrong"
        desc="It’s always time for a coffee break We should be back by the time you finish your coffee."
        alt="Error illustration"
    />
);

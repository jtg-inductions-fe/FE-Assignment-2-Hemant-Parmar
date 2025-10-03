import ErrorImageURL from '@assets/images/Error.svg';
import { ErrorContainer } from '@containers';

export const ErrorPage = () => (
    <ErrorContainer
        imageURL={ErrorImageURL}
        title="Something has gone seriously wrong"
        desc="It’s always time for a coffee break We should be back by the time you finish your coffee."
        alt="Illustration indicating an application error"
    />
);

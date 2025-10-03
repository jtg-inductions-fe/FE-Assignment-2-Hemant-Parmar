import { Container, Typography } from '@mui/material';

import { PrimaryButton } from '@components';
import { ROUTES } from '@constants';

import { FlexBox } from './ErrorContainer.styles';
import { ErrorContainerProps } from './ErrorContainer.types';

export const ErrorContainer = ({
    imageURL,
    title,
    desc,
    alt,
}: ErrorContainerProps) => (
    <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
        <FlexBox
            gap={0}
            py={{ xs: 2, sm: 0 }}
            width={{ md: '66%', lg: '50%' }}
            margin={'auto'}
        >
            <img
                width={'100%'}
                src={imageURL}
                alt={alt ?? `${title} illustration`}
            />
        </FlexBox>
        <FlexBox gap={5} p={{ xs: 1, sm: 0 }}>
            <FlexBox gap={2}>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="body1" color="text.secondary">
                    {desc}
                </Typography>
            </FlexBox>

            <PrimaryButton route={ROUTES.ROOT} content={'Go back home'} />
        </FlexBox>
    </Container>
);

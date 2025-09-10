import { GoHomeButton } from 'component';

import { Container, Typography } from '@mui/material';

import { FlexBox } from './Fallback.style';
import { FallbackProps } from './Fallback.type';

export const Fallback = ({ imageURL, title, desc }: FallbackProps) => (
    <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
        <FlexBox
            py={{ xs: 8, sm: 0 }}
            width={{ md: '66%', lg: '50%' }}
            margin={'auto'}
        >
            <img width={'100%'} src={imageURL} alt="Not Found" />
        </FlexBox>
        <FlexBox gap={22} p={{ xs: 4, sm: 0 }}>
            <FlexBox gap={10}>
                <Typography variant="h1">{title}</Typography>
                <Typography variant="body1" color="text.secondary">
                    {desc}
                </Typography>
            </FlexBox>

            <GoHomeButton />
        </FlexBox>
    </Container>
);

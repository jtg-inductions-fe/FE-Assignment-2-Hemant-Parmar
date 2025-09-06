import { galleryConfig } from 'data';

import {
    Container,
    ImageList,
    ImageListItem,
    useMediaQuery,
} from '@mui/material';

import { theme } from '@theme';

export const Gallery = () => {
    const small = useMediaQuery(theme.breakpoints.up('sm'));
    const medium = useMediaQuery(theme.breakpoints.up('md'));
    const large = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Container maxWidth="xl">
            <ImageList
                variant={'quilted'}
                cols={small ? (large ? 3 : 2) : 1}
                rowHeight={
                    galleryConfig.rowHeight &&
                    (medium
                        ? galleryConfig.rowHeight.large
                        : galleryConfig.rowHeight.small)
                }
                gap={45}
            >
                {galleryConfig.images.map(
                    (
                        { URL, rows, cols, priority, desc, mobileInvisible },
                        index,
                    ) => (
                        <ImageListItem
                            key={index}
                            rows={rows}
                            cols={small ? cols : 1}
                            sx={{
                                gridRow: !large && priority ? 1 : 'auto',
                                display:
                                    !small && mobileInvisible
                                        ? 'none'
                                        : 'block',
                            }}
                        >
                            <img src={URL} alt={desc} />
                        </ImageListItem>
                    ),
                )}
            </ImageList>
        </Container>
    );
};

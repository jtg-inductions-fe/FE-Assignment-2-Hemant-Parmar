import {
    Container,
    ImageList,
    ImageListItem,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { galleryConfig } from '@data';

export const Gallery = () => {
    const theme = useTheme();

    const isMobileScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isTabletScreen = useMediaQuery(theme.breakpoints.up('md'));
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Container maxWidth="xl">
            <ImageList
                variant={'quilted'}
                cols={isMobileScreen ? (isDesktopScreen ? 3 : 2) : 1}
                rowHeight={
                    galleryConfig.rowHeight &&
                    (isTabletScreen
                        ? galleryConfig.rowHeight.large
                        : galleryConfig.rowHeight.small)
                }
                gap={45}
            >
                {galleryConfig.images.map(
                    (
                        { url, rows, cols, priority, desc, mobileInvisible },
                        index,
                    ) => (
                        <ImageListItem
                            key={index}
                            rows={rows}
                            cols={isMobileScreen ? cols : 1}
                            sx={{
                                gridRow: !isDesktopScreen && priority ? 1 : 'auto',
                                display:
                                    !isMobileScreen && mobileInvisible
                                        ? 'none'
                                        : 'block',
                            }}
                        >
                            <img src={url} alt={desc} />
                        </ImageListItem>
                    ),
                )}
            </ImageList>
        </Container>
    );
};

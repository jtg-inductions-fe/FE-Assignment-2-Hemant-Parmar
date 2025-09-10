import EmptyImageURL from '@assets/images/gallery/empty-images.png';
import RegularLandscapeURL from '@assets/images/gallery/regular-landscape.png';
import WorkLaptopImageURL from '@assets/images/gallery/work-on-laptop.png';

type GalleryImage = {
    URL: string;
    rows?: number;
    cols?: number;
    desc: string;
    priority?: boolean;
    mobileInvisible?: boolean;
};

type GalleryConfig = {
    rowHeight?: { small: number; large: number };
    images: GalleryImage[];
};

export const galleryConfig: GalleryConfig = {
    rowHeight: { small: 112, large: 200 },
    images: [
        {
            URL: RegularLandscapeURL,
            desc: 'GreyScale Landscape',
        },
        {
            URL: EmptyImageURL,
            desc: 'Empty Placeholder',
        },
        {
            URL: WorkLaptopImageURL,
            desc: 'Work on Laptop',
            rows: 2,
            cols: 1,
            priority: true,
        },
        {
            URL: RegularLandscapeURL,
            desc: 'GreyScale Landscape',
            rows: 1,
            cols: 2,
            mobileInvisible: true,
        },
    ],
};

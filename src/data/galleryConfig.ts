import EmptyImageURL from '@assets/images/gallery/empty-images.png';
import RegularLandscapeURL from '@assets/images/gallery/regular-landscape.png';
import WorkLaptopImageURL from '@assets/images/gallery/work-on-laptop.png';

export const galleryConfig = {
    rowHeight: { small: 112, large: 200 },
    images: [
        {
            url: RegularLandscapeURL,
            desc: 'GreyScale Landscape',
        },
        {
            url: EmptyImageURL,
            desc: 'Empty Placeholder',
        },
        {
            url: WorkLaptopImageURL,
            desc: 'Work on Laptop',
            rows: 2,
            cols: 1,
            priority: true,
        },
        {
            url: RegularLandscapeURL,
            desc: 'GreyScale Landscape',
            rows: 1,
            cols: 2,
            mobileInvisible: true,
        },
    ],
};

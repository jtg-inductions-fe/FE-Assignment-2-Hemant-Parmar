import EmptyImageURL from '@assets/images/gallery/empty-images.png';
import RegularLandscapeURL from '@assets/images/gallery/regular-landscape.png';
import WorkLaptopImageURL from '@assets/images/gallery/work-on-laptop.png';

/**
 * A single gallery image.
 */
type GalleryImage = {
    /** Image source URL. */
    url: string;

    /** Grid rows to span (default: 1). */
    rows?: number;

    /** Grid columns to span (default: 1). */
    cols?: number;

    /** Image description / caption. */
    desc: string;

    /** Prioritize the display (e.g. Topmost on mobile). */
    priority?: boolean;

    /** Hide image on mobile devices. */
    mobileInvisible?: boolean;
};

/**
 * Gallery layout configuration.
 */
type GalleryConfig = {
    /** Row height (px) for small/large screens. */
    rowHeight?: { small: number; large: number };

    /** List of gallery images. */
    images: GalleryImage[];
};

export const galleryConfig: GalleryConfig = {
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

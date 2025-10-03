import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of Lines to clamp
 * @returns Returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

/**
 * Specifies a max-width for clamping text to a single line inside a flex container
 * @param maxWidth - The max width for the text
 * @returns Returns Flex clamp CSS properties
 */
const flexClamp = (maxWidth: CSSProperties['maxWidth']): CSSProperties => ({
    maxWidth: maxWidth,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
});

export const mixins: MixinsOptions = {
    lineClamp,
    flexClamp,
};

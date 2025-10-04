export function shortenNumber(value: number) {
    if (value >= 1_000_000_000_000) {
        return (value / 1_000_000_000_000).toFixed(0) + 't';
    } else if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(0) + 'b';
    } else if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(0) + 'm';
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(0) + 'k';
    } else if (value > 0) {
        return value.toString();
    } else {
        return '0';
    }
}

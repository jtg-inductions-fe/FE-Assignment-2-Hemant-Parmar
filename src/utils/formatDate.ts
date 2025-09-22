export function formatDateVariants(utcDate: string): {
    short: string;
    full: string;
} {
    const date = new Date(utcDate);
    if (Number.isNaN(date.getTime())) return { short: '', full: '' };

    const short = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        timeZone: 'UTC',
    }).format(date);

    const full = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date);

    const usFull = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date);

    return { short, full, usFull };
}

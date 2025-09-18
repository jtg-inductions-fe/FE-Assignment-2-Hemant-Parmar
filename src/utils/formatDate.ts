export function formatDateVariants(utcDate: string) {
  const date = new Date(utcDate);

  const short = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  }).format(date);

  const full = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

  return { short, full };
}

/**
 * Dates in the data files are plain YYYY-MM-DD strings. Parse them as UTC and
 * format as UTC so a build server in another time zone can't shift the day.
 */
function parse(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

/** 'Wednesday, October 14, 2026' */
export function formatDate(date: string): string {
  return parse(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/** Parts for the date badge on the calendar: { month: 'Oct', day: '14' } */
export function dateParts(date: string): { month: string; day: string } {
  const d = parse(date);
  return {
    month: d.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short' }),
    day: String(d.getUTCDate()),
  };
}

/** Academic semester for a date: Jan–Jul is Spring, Aug–Dec is Fall. */
export function semesterOf(date: string): string {
  const d = parse(date);
  return `${d.getUTCMonth() < 7 ? 'Spring' : 'Fall'} ${d.getUTCFullYear()}`;
}

export function formattedDate(
  date: Date,
  options: Record<any, string>,
): string {
  const input = new Date(date);
  const niceDate = new Intl.DateTimeFormat("en-US", options).format(input);
  return niceDate;
}

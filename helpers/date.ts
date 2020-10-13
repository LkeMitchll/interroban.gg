export function formattedDate(
  date: Date,
  options: Record<any, string>,
): string {
  const input = new Date(date);
  const niceDate = new Intl.DateTimeFormat("en-US", options).format(input);
  return niceDate;
}

export function dateToEpochWithOffset(time: number, offset: number): string {
  const date = new Date();
  date.setHours(time);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
}

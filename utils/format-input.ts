export function getDateYMD(date: Date | number | string): string {
  const d = new Date(date);
  const dateString = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
  return dateString;
}

module.exports = function formattedDate(date) {
  const input = new Date(date);
  const niceDate = new Intl.DateTimeFormat(
    'en-US',
    { day: '2-digit', month: 'short', year: 'numeric' },
  ).format(input);
  return niceDate;
};

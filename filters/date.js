module.exports = function formattedDate(date, options) {
  const input = new Date(date);
  const niceDate = new Intl.DateTimeFormat(
    "en-US",
    options ? options : { month: "long", year: "numeric" }
  ).format(input);
  return niceDate;
};

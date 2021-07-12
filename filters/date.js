module.exports = function formattedDate(date, template) {
  const input = new Date(date);
  const templates = {
    long: { month: "long", year: "numeric" },
    medium: { month: "short", year: "numeric" },
    short: { day: "numeric", month: "short", year: "numeric" },
  };
  const niceDate = new Intl.DateTimeFormat(
    "en-US",
    templates[template] || templates.short
  ).format(input);
  return niceDate;
};

module.exports = function dateToEpochWithOffset(time, offset) {
  const date = new Date();
  date.setHours(time);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
};

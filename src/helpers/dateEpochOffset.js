module.exports = function dateToEpochWithOffset(time, offset) {
  const date = new Date();
  date.setHours(time);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
};

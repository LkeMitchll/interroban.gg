module.exports = function (array, limit) {
  array = limit < 2 ? array[0] : array.slice(0, limit);
  return array;
};

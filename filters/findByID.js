module.exports = function (array, id) {
  const result = array.filter((page) => page.sys.id === id);
  return result[0];
};

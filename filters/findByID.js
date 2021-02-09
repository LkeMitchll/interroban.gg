module.exports = function findByID(array, id) {
  const result = array.filter((page) => page.sys.id === id);
  return result[0];
};

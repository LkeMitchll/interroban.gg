module.exports = function dePaginated(input) {
  let result = [];
  const children = Object.keys(input);
  children.forEach((child) => {
    result.push(...input[child]);
  });
  result = result.reverse();

  return result;
};

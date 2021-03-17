module.exports = function JSONStringify(data) {
  const json = JSON.stringify(data.map((item) => item.fields));
  return json;
};

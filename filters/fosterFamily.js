module.exports = function fosterFamily(title) {
  const result = title.split(" ");
  if (result.length > 4) {
    result.splice(-2, 0, "<br>");
  }

  return result.join(" ");
};

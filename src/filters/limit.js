const limit = (data, amount) => {
  const array = amount < 2 ? data[0] : data.slice(0, amount);
  return array;
};

export default limit;

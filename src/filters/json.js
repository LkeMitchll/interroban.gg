const JSONStringify = (data) => {
  const json = JSON.stringify(data.map((item) => item.fields));
  return json;
};

export default JSONStringify;

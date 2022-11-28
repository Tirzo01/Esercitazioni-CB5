const sum = (a, b) => {
  return parseInt(a) + parseInt(b);
};

const sub = (a, b) => {
  return parseInt(a) - parseInt(b);
};

const mul = (a, b) => {
  return parseInt(a) * parseInt(b);
};

const div = (a, b) => {
  return parseInt(a) / parseInt(b);
};

module.exports = { sum, sub, mul, div };

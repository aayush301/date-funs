const addMilliseconds = require("../add/addMilliseconds");

const subMilliseconds = (dateParam, amount) => {
  return addMilliseconds(dateParam, -amount);
};

module.exports = subMilliseconds;

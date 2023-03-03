const addYears = require("../add/addYears");

const subYears = (dateParam, amount) => {
  return addYears(dateParam, -amount);
};

module.exports = subYears;

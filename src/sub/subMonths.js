const addMonths = require("../add/addMonths");

const subMonths = (dateParam, amount) => {
  return addMonths(dateParam, -amount);
};

module.exports = subMonths;

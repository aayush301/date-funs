const addDays = require("../add/addDays");

const subDays = (dateParam, amount) => {
  return addDays(dateParam, -amount);
};

module.exports = subDays;

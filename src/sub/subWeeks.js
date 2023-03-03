const addWeeks = require("../add/addWeeks");

const subWeeks = (dateParam, amount) => {
  return addWeeks(dateParam, -amount);
};

module.exports = subWeeks;

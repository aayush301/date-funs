const addMinutes = require("../add/addMinutes");

const subMinutes = (dateParam, amount) => {
  return addMinutes(dateParam, -amount);
};

module.exports = subMinutes;

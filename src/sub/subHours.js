const addHours = require("../add/addHours");

const subHours = (dateParam, amount) => {
  return addHours(dateParam, -amount);
};

module.exports = subHours;

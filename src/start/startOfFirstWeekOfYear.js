const startOfWeek = require("./startOfWeek");
const startOfYear = require("./startOfYear");

const startOfFirstWeekOfYear = (dateParam, options = { weekStartsOn: 0 }) => {
  return startOfWeek(startOfYear(dateParam), options);
};

module.exports = startOfFirstWeekOfYear;

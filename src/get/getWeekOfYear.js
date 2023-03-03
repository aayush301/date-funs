const startOfFirstWeekOfYear = require("../start/startOfFirstWeekOfYear");
const startOfWeek = require("../start/startOfWeek");
const { millisecondsInWeek } = require("../_lib/constants");

const getWeekOfYear = (dateParam, options = { weekStartsOn: 0 }) => {
  const date = new Date(dateParam);
  const diff = startOfWeek(date, options).getTime() - startOfFirstWeekOfYear(date, options).getTime();
  return Math.round(diff / millisecondsInWeek) + 1;
};

module.exports = getWeekOfYear;

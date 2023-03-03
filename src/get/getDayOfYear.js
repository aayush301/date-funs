const diffInCalendarDays = require("../diff/diffInCalendarDays");
const startOfYear = require("../start/startOfYear");

const getDayOfYear = date => {
  return diffInCalendarDays(date, startOfYear(date)) + 1;
};

module.exports = getDayOfYear;

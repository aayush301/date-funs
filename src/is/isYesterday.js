const subDays = require("../sub/subDays");
const isSameDay = require("./isSameDay");

/**
 * @summary - Is the given date yesterday (with same month and year)?
 */
const isYesterday = date => {
  return isSameDay(date, subDays(Date.now(), 1));
};

module.exports = isYesterday;

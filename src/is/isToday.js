const isSameDay = require("./isSameDay");

/**
 * @summary - Is the given date today (with same month and year)?
 */
const isToday = date => {
  return isSameDay(date, Date.now());
};

module.exports = isToday;

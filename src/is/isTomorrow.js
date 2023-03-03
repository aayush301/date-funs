const addDays = require("../add/addDays");
const isSameDay = require("./isSameDay");

/**
 * @summary - Is the given date tomorrow (with same month and year)?
 */
const isTomorrow = date => {
  return isSameDay(date, addDays(Date.now(), 1));
};

module.exports = isTomorrow;

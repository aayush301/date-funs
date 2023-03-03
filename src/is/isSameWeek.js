const startOfWeek = require("../start/startOfWeek");

/**
 * @summary - Are the given dates in the same week (and month and year)?
 */
const isSameWeek = (date1, date2) => {
  const day1WeekStart = startOfWeek(date1);
  const day2WeekStart = startOfWeek(date2);
  return day1WeekStart.getTime() === day2WeekStart.getTime();
};

module.exports = isSameWeek;

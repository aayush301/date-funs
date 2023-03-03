const startOfHour = require("../start/startOfHour");

/**
 * @summary - Are the given dates in the same hour (in the same day)?
 */
const isSameHour = (date1, date2) => {
  const day1HourStart = startOfHour(date1);
  const day2HourStart = startOfHour(date2);
  return day1HourStart.getTime() === day2HourStart.getTime();
};

module.exports = isSameHour;

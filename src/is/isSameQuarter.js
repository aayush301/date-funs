const startOfQuarter = require("../start/startOfQuarter");

/**
 * @summary - Are the given dates in the same quarter (in the same year)?
 */
const isSameQuarter = (date1, date2) => {
  const date1QuarterStart = startOfQuarter(date1);
  const date2QuarterStart = startOfQuarter(date2);
  return date1QuarterStart.getTime() === date2QuarterStart.getTime();
};

module.exports = isSameQuarter;

const diffInMonths = require("./diffInMonths");

const diffInQuarters = (date1, date2, asFloat = false) => {
  const diff = diffInMonths(date1, date2, true) / 3;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInQuarters;

const diffInMonths = require("./diffInMonths");

const diffInYears = (date1, date2, asFloat = false) => {
  const diff = diffInMonths(date1, date2, true) / 12;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInYears;

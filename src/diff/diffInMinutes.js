const { millisecondsInMinute } = require("../_lib/constants");

const diffInMinutes = (date1, date2, asFloat = false) => {
  const diff = (new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInMinute;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInMinutes;

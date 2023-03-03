const { millisecondsInHour } = require("../_lib/constants");

const diffInHours = (date1, date2, asFloat = false) => {
  const diff = (new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInHour;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInHours;

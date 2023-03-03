const { millisecondsInWeek } = require("../_lib/constants");

const diffInWeeks = (date1, date2, asFloat = false) => {
  const diff = (new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInWeek;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInWeeks;

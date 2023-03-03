const { millisecondsInSecond } = require("../_lib/constants");

const diffInSeconds = (date1, date2, asFloat = false) => {
  const diff = (new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInSecond;
  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInSeconds;

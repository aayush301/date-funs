const addDays = require("./addDays");
const addMonths = require("./addMonths");
const addSeconds = require("./addSeconds");

const add = (
  dateParam,
  { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 }
) => {
  const date = new Date(dateParam);
  const dateWithMonths = addMonths(date, months + years * 12);
  const dateWithDays = addDays(dateWithMonths, days + weeks * 7);
  const finalDate = addSeconds(dateWithDays, (hours * 60 + minutes) * 60 + seconds);
  return finalDate;
};

module.exports = add;

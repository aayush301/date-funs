const addMonths = require("../add/addMonths");
const diffInCalendarMonths = require("./diffInCalendarMonths");

const diffInMonths = (date1, date2, asFloat = false) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  if (dt1.getTime() > dt2.getTime()) {
    return -diffInMonths(date2, date1, asFloat);
  }

  const calendarMonthsDiff = diffInCalendarMonths(dt2, dt1);
  const dt1a = addMonths(dt1, calendarMonthsDiff);
  let diff = calendarMonthsDiff;

  if (dt1a.getTime() <= dt2.getTime()) {
    const dt1b = addMonths(dt1a, 1);
    diff += (dt2.getTime() - dt1a.getTime()) / (dt1b.getTime() - dt1a.getTime());
  } else {
    const dt1b = addMonths(dt1, calendarMonthsDiff - 1);
    diff -= (dt1a.getTime() - dt2.getTime()) / (dt1a.getTime() - dt1b.getTime());
  }

  return asFloat ? diff : Math.trunc(diff);
};

module.exports = diffInMonths;

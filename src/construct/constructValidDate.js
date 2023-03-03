const unitAliases = require("../_lib/units/aliases");

const getNormalizedUnit = alias => {
  for (const unit in unitAliases) {
    if (unitAliases[unit].includes(alias)) return unit;
  }
  return null;
};

const constructValidDate = val => {
  // undefined, null, empty string or 0
  if (!val) {
    const date = new Date();
    return date;
  }

  // empty array
  if (Array.isArray(val) && val.length === 0) {
    const date = new Date();
    return date;
  }

  // empty object
  if (val && Object.keys(val).length === 0 && val.constructor === Object) {
    const date = new Date();
    return date;
  }

  // non-empty string
  if (val && typeof val === "string") {
    let date = new Date(val);
    if (isNaN(date)) date = new Date();
    return date;
  }

  // non-zero number
  if (val && typeof val === "number") {
    const date = new Date(val);
    return date;
  }

  // date
  if (val instanceof Date) {
    let date = new Date(val);
    if (isNaN(date)) date = new Date();
    return date;
  }

  // Array
  if (Array.isArray(val)) {
    let [year, month = 0, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0] = val;
    return new Date(year, month, day, hour, minute, second, millisecond);
  }

  // Object
  if (val.constructor === Object) {
    const normalizedObj = {};

    for (const unit in val) {
      const normalizedUnit = getNormalizedUnit(unit);
      if (!normalizedUnit) continue;
      normalizedObj[normalizedUnit] = val[unit];
    }
    const {
      years = 0,
      months = 0,
      days = 1,
      hours = 0,
      minutes = 0,
      seconds = 0,
      milliseconds = 0,
    } = normalizedObj;

    const date = new Date(years, months, days, hours, minutes, seconds, milliseconds);
    return date;
  }

  return new Date();
};

module.exports = constructValidDate;

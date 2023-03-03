const { orderedUnits } = require("./_lib/matrix");
const unitsStyle = require("./_lib/unitsStyle");

/**
 * convert to human readable string
 */
const humanizeDuration = (duration, options = {}) => {
  const {
    delimiter = ", ",
    separatorInValueAndUnit = " ",
    zerosPresence = false,
    unitDisplay = "long",
    unitsToShow,
  } = options;

  let units = orderedUnits;
  if (unitsToShow) {
    units = units.filter(unit => unitsToShow.includes(unit));
  }

  return units
    .map(unit => {
      if (duration[unit] === undefined) return null;
      if (duration[unit] === 0 && !zerosPresence) return null;
      const value = duration[unit];
      const numberCategory = value == 1 ? "singular" : "plural";
      return [value, unitsStyle[numberCategory][unitDisplay][unit]].join(separatorInValueAndUnit);
    })
    .filter(x => x)
    .join(delimiter);
};

module.exports = humanizeDuration;

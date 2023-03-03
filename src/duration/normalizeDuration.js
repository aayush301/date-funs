const { orderedUnits, casualMatrix, accurateMatrix } = require("./_lib/matrix");

const antiTrunc = n => {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
};

/**
 * @summary Reduce the duration to its canannical representation in its current units.
 *
 * @param duration - { years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds }
 * @param conversionAccuracy - "casual" or "accurate", defaults to "casual"
 *  - If casual, uses approximate conversions, e.g., 1 year = 365 days, 1 month = 30 days
 *  - If accurate, uses accurate conversions, e.g., 1 year = 365.2425 days, 1 month = 30.436875 days
 *
 * @example Normalize {years:2, days:5000} => {years:15, days:255}
 * @example Normalize {hours:12, minutes:-45} => {hours:11, minutes:15}
 *
 */
const normalizeDuration = (duration, conversionAccuracy = "casual") => {
  const matrix = conversionAccuracy === "casual" ? casualMatrix : accurateMatrix;
  const newDuration = {};

  [...orderedUnits].reverse().reduce((previousUnit, currentUnit) => {
    if (duration[currentUnit] === undefined) {
      return previousUnit;
    }

    newDuration[currentUnit] = duration[currentUnit];
    if (previousUnit) {
      const conv = matrix[currentUnit][previousUnit];
      const raw = newDuration[previousUnit] / conv;
      const sameSign = Math.sign(newDuration[previousUnit]) === Math.sign(duration[currentUnit]);
      const added =
        !sameSign && duration[currentUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
      newDuration[currentUnit] += added;
      newDuration[previousUnit] -= added * conv;
    }
    return currentUnit;
  }, null);

  return newDuration;
};

module.exports = normalizeDuration;

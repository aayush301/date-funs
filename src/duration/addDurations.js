const normalizeDuration = require("./normalizeDuration");
const { orderedUnits } = require("./_lib/matrix");

/**
 * @summary Add two durations
 *
 * @param duration1 - { years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds }
 * @param duration2 - { years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds }
 */
const addDurations = (duration1, duration2, options = { normalize: false, conversionAccuracy: "casual" }) => {
  let result = {};
  for (const unit of orderedUnits) {
    if (duration1[unit] !== undefined || duration2[unit] !== undefined) {
      result[unit] = (duration1[unit] || 0) + (duration2[unit] || 0);
    }
  }

  if (options.normalize) {
    result = normalizeDuration(result, options.conversionAccuracy);
  }
  return result;
};

module.exports = addDurations;

const { daysInYear } = require("../../_lib/constants");

exports.lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000,
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000,
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000,
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000,
  },
  seconds: {
    milliseconds: 1000,
  },
};

exports.casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000,
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000,
  },
  ...this.lowOrderMatrix,
};

exports.accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYear / 7,
    days: daysInYear,
    hours: daysInYear * 24,
    minutes: daysInYear * 24 * 60,
    seconds: daysInYear * 24 * 60 * 60,
    milliseconds: daysInYear * 24 * 60 * 60 * 1000,
  },
  quarters: {
    months: 3,
    weeks: daysInYear / 28,
    days: daysInYear / 4,
    hours: (daysInYear * 24) / 4,
    minutes: (daysInYear * 24 * 60) / 4,
    seconds: (daysInYear * 24 * 60 * 60) / 4,
    milliseconds: (daysInYear * 24 * 60 * 60 * 1000) / 4,
  },
  months: {
    weeks: daysInYear / 84,
    days: daysInYear / 12,
    hours: (daysInYear * 24) / 12,
    minutes: (daysInYear * 24 * 60) / 12,
    seconds: (daysInYear * 24 * 60 * 60) / 12,
    milliseconds: (daysInYear * 24 * 60 * 60 * 1000) / 12,
  },
  ...this.lowOrderMatrix,
};
exports.orderedUnits = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

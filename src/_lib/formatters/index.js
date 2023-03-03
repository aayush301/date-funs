const getDayOfYear = require("../../get/getDayOfYear");
const getWeekOfYear = require("../../get/getWeekOfYear");
const { ordinalNumber, monthValues, dayValues } = require("../locales/en-US");
const addLeadingZeros = require("../utils/addLeadingZeros");

const formatters = {
  // year
  y: (date, token) => {
    if (token === "yo") {
      return ordinalNumber(date.getFullYear());
    }
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },

  // month
  M: (date, token) => {
    const month = date.getMonth();
    switch (token) {
      case "Mo":
        return ordinalNumber(month + 1);
      case "M":
        return String(month + 1);
      case "MM":
        return addLeadingZeros(month + 1, 2);
      case "MMM":
        return monthValues.abbreviated[month];
      case "MMMM":
        return monthValues.wide[month];
      case "MMMMM":
        return monthValues.narrow[month];
      default:
        return monthValues.wide[month];
    }
  },

  // week of year
  w: (date, token) => {
    const week = getWeekOfYear(date);
    if (token === "wo") return ordinalNumber(week);
    return addLeadingZeros(week, token.length);
  },

  // day of month
  d: (date, token) => {
    if (token === "do") return ordinalNumber(date.getDate());
    return addLeadingZeros(date.getDate(), token.length);
  },

  //day of year
  D: (date, token) => {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") return ordinalNumber(dayOfYear);
    return addLeadingZeros(dayOfYear, token.length);
  },

  // day of week
  E: (date, token) => {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "Eo":
        return ordinalNumber(dayOfWeek + 1);
      case "E":
        return String(dayOfWeek + 1);
      case "EE":
        return addLeadingZeros(dayOfWeek + 1, 2);
      case "EEE":
        return dayValues.abbreviated[dayOfWeek];
      case "EEEE":
        return dayValues.wide[dayOfWeek];
      case "EEEEE":
        return dayValues.narrow[dayOfWeek];
      case "EEEEEE":
        return dayValues.short[dayOfWeek];
      default:
        return dayValues.wide[dayOfWeek];
    }
  },

  // am/pm
  a: (date, token) => {
    const isAM = date.getHours() < 12 ? true : false;
    switch (token) {
      case "aa":
        return isAM ? "AM" : "PM";
      case "aaa":
        return isAM ? "am" : "pm";
      case "aaaa":
        return isAM ? "a.m." : "p.m.";
      case "aaaaa":
      default:
        return isAM ? "a" : "p";
    }
  },

  // hour [1-12]
  h: (date, token) => {
    let hours = date.getHours() % 12;
    if (hours === 0) hours = 12;
    if (token === "ho") return ordinalNumber(hours);
    return addLeadingZeros(hours, token.length);
  },

  // hour [0-23]
  H: (date, token) => {
    if (token === "Ho") return ordinalNumber(date.getHours());
    return addLeadingZeros(date.getHours(), token.length);
  },

  // minute
  m: (date, token) => {
    if (token === "mo") return ordinalNumber(date.getMinutes());
    return addLeadingZeros(date.getMinutes(), token.length);
  },

  // second
  s: (date, token) => {
    if (token === "so") return ordinalNumber(date.getSeconds());
    return addLeadingZeros(date.getSeconds(), token.length);
  },
};

module.exports = formatters;

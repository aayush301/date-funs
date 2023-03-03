const formatters = require("../_lib/formatters");

/**
 * @summary - format the date according to  the format string provided
 *
 * @description
 * Accepted patterns:
 * // Calendar Year
 * y - 0,1,2,...,2022,2023,...
 * yo - 0th,1st,2nd,3rd,...
 * yy - 00,01,02,...
 * yyy - 000,001,...
 * yyyy - 0000,0001,...
 *
 * // Month
 * M - 1,2,3,...,10,11,12
 * Mo - 1st,2nd,3rd,...,12th
 * MM - 01,02,03,...,12
 * MMM - Jan,...,Dec
 * MMMM - January,...,December
 * MMMMM - J,F,...N,D
 *
 * // Local week of year
 * w - 1,2,...,53
 * wo - 1st,2nd,...,53th
 * ww - 01,02,...53
 *
 * // Day of month
 * d - 1,2,...,31
 * do - 1st,2nd,...,31st
 * dd - 01,02,...,31
 *
 * // Day of year
 * D - 1,2,...,365,366
 * Do - 1st,...365th, 366th
 * DD - 01,...366
 * DDD - 001,...366
 *
 * // Day of week
 * E - 1,2,...
 * Eo - 1st,2nd,...
 * EE - 01,02,...
 * EEE - Sun,Mon,...
 * EEEE - Sunday,Monday,...
 * EEEEE - M,T,...
 * EEEEEE -Mo,Tu,...
 *
 * // AM, PM
 * aa - AM,PM
 * aaa - am,pm
 * aaaa - a.m.,p.m.
 * aaaaa - a,p
 *
 * // Hour [1-12]
 * h - 1,2,...,11,12
 * ho - 1st,2nd,...,11th,12th
 * hh - 01,02,...,11,12
 *
 * // Hour [0-23]
 * H - 0,1,...,23
 * Ho - 0th,1st,...23rd
 * HH - 00,01,...23
 *
 * // Minute
 * m - 0,1,...59
 * mo - 0th,1st,...59th
 * mm - 00,01,...59
 *
 * // Second
 * s - 0,1,...59
 * so - 0th,1st,...59th
 * ss - 00,01,...59
 *
 *
 */
const format = (dateParam, formatStr) => {
  // '(''|[^'])+('|$) matches anything surrounded by two quote characters, or a single quote symbol, which ends the sequence.
  const formattingTokensRegExp = /[yMwdDEhHms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  const date = new Date(dateParam);

  const result = formatStr
    .match(formattingTokensRegExp)
    .map(substring => {
      if (substring === "''") return "'";
      if (substring[0] === "'") return substring;

      const formatter = formatters[substring[0]];
      if (formatter) return formatter(date, substring);

      return substring;
    })
    .join("");

  return result;
};

module.exports = format;

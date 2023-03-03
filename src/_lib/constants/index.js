exports.daysInWeek = 7;

/**
 * Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
exports.daysInYear = 365.2425;
exports.daysInMonth = this.daysInYear / 12;
exports.millisecondsInWeek = 604800000;
exports.millisecondsInDay = 86400000;
exports.millisecondsInMinute = 60000;
exports.millisecondsInHour = 3600000;
exports.millisecondsInSecond = 1000;
exports.minutesInYear = 525600;
exports.minutesInMonth = 43200;
exports.minutesInDay = 1440;
exports.minutesInHour = 60;
exports.monthsInQuarter = 3;
exports.monthsInYear = 12;
exports.quartersInYear = 4;
exports.secondsInHour = 3600;
exports.secondsInMinute = 60;
exports.secondsInDay = this.secondsInHour * 24;
exports.secondsInWeek = this.secondsInDay * this.daysInWeek;
exports.secondsInYear = this.secondsInDay * this.daysInYear;
exports.secondsInMonth = this.secondsInYear / this.monthsInYear;
exports.secondsInQuarter = this.secondsInYear / this.quartersInYear;

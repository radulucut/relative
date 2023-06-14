/**
 * Returns a string representing the time since the given date.
 * 
 * @param {Date} date The date to calculate the time since.
 * @returns {string} A string representing the time since the given date.
 * @example
 * timeSince(new Date("2023-01-01T00:00:00.000Z"));
 * //=> 5 months
 */
function timeSince(date) {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        const floor = Math.floor(interval);
        return floor + " year" + (floor > 1 ? "s" : "");
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        const floor = Math.floor(interval);
        return floor + " month" + (floor > 1 ? "s" : "");
    }

    interval = seconds / 86400;
    if (interval > 1) {
        const floor = Math.floor(interval);
        return floor + " day" + (floor > 1 ? "s" : "");
    }

    interval = seconds / 3600;
    if (interval > 1) {
        const floor = Math.floor(interval);
        return floor + " hour" + (floor > 1 ? "s" : "");
    }

    interval = seconds / 60;
    if (interval > 1) {
        const floor = Math.floor(interval);
        return floor + " minute" + (floor > 1 ? "s" : "");
    }

    return Math.max(Math.floor(seconds), 1) + " second" + (seconds > 1 ? "s" : "");
}

module.exports = timeSince;
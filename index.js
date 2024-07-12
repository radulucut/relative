/**
 * Format the relative time between the current date and the date passed as a parameter.
 * 
 * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.
 *  For the general form and interpretation of the locales argument,
 *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
 *
 * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)
 *  with some or all of options of `RelativeTimeFormatOptions`.
 *
 * @returns A new Time object.
 *
 *
 * @example
 * ```
 * import Time from "@radulucut/relative";
 *
 * const time = Time();
 * time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"
 * 
 * const timeRO = Time('ro', { numeric: 'auto' });
 * timeRO.Relative(new Date("2024-01-01T00:00:00.000Z")); // "peste 2 luni"
 * ```
 */
function Time(locales, options) {
    const f = new Intl.RelativeTimeFormat(locales, options);

    /**
     *
     * @param date The date to compare to the current date.
     * 
     * @returns A string representing the relative time between the current date and the date passed as a parameter.
     *
     * @example
     * ```
     * import Time from "@radulucut/relative";
     *
     * const time = Time();
     * time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"
     * 
     * const timeRO = Time('ro', { numeric: 'auto' });
     * timeRO.Relative(new Date("2024-01-01T00:00:00.000Z")); // "peste 2 luni"
     * ```
     */
    function Relative(date) {
        const diff = (new Date().getTime() - date.getTime()) / 1000;
        const sign = diff > 0 ? -1 : 1;
        const seconds = Math.abs(diff);

        if (seconds < 60) {
            return f.format(Math.max(Math.floor(seconds), 1) * sign, 'second');
        }

        if (seconds < 3600) {
            return f.format(Math.floor(seconds / 60) * sign, 'minute');
        }

        if (seconds < 86400) {
            return f.format(Math.floor(seconds / 3600) * sign, 'hour');
        }

        if (seconds < 2592000) {
            return f.format(Math.floor(seconds / 86400) * sign, 'day');
        }

        if (seconds < 31536000) {
            return f.format(Math.floor(seconds / 2592000) * sign, 'month');
        }

        return f.format(Math.floor(seconds / 31536000) * sign, 'year');
    }

    return { Relative };
}

module.exports = Time;
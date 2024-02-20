declare module "t-since" {
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
   * import Time from "t-since";
   *
   * const time = Time();
   * time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"
   *
   * const timeRO = Time('ro', { numeric: 'auto' });
   * timeRO.Relative(new Date("2024-01-01T00:00:00.000Z")); // "peste 2 luni"
   * ```
   */
  function Time(
    locales?: string | string[],
    options?: Intl.RelativeTimeFormatOptions
  ): {
    /**
     *
     * @param date The date to compare to the current date.
     * @returns A string representing the relative time between the current date and the date passed as a parameter.
     *
     * @example
     * ```
     * import Time from "t-since";
     *
     * const time = Time();
     * time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"
     *
     * const timeRO = Time('ro', { numeric: 'auto' });
     * timeRO.Relative(new Date("2024-01-01T00:00:00.000Z")); // "peste 2 luni"
     * ```
     */
    Relative: (date: Date) => string;
  };

  export = Time;
}

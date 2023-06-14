declare module "t-since" {
  /**
   * Returns a string representing the time since the given date.
   *
   * @param date The date to calculate the time since.
   * @returns A string representing the time since the given date.
   *
   * @example
   * timeSince(new Date("2023-01-01T00:00:00.000Z"))
   * // => "5 months"
   */
  function timeSince(date: Date): string;

  export default timeSince;
}

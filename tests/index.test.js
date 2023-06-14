const timeSince = require("../index");
const yearInMilliseconds = 31536000000;
const monthInMilliseconds = 2592000000;
const dayInMilliseconds = 86400000;
const hourInMilliseconds = 3600000;
const minuteInMilliseconds = 60000;
const secondInMilliseconds = 1000;

describe("timeSince", () => {
    test("should return 2 years", () => {
        const date = new Date(new Date() - yearInMilliseconds * 2 - secondInMilliseconds);
        expect(timeSince(date)).toBe("2 years");
    });

    test("should return 1 year", () => {
        const date = new Date(new Date() - yearInMilliseconds - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 year");
    });

    test("should return 6 months", () => {
        const date = new Date(new Date() - monthInMilliseconds * 6 - secondInMilliseconds);
        expect(timeSince(date)).toBe("6 months");
    });

    test("should return 1 month", () => {
        const date = new Date(new Date() - monthInMilliseconds - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 month");
    });

    test("should return 10 days", () => {
        const date = new Date(new Date() - dayInMilliseconds * 10 - secondInMilliseconds);
        expect(timeSince(date)).toBe("10 days");
    });

    test("should return 1 day", () => {
        const date = new Date(new Date() - dayInMilliseconds - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 day");
    });

    test("should return 12 hours", () => {
        const date = new Date(new Date() - hourInMilliseconds * 12 - secondInMilliseconds);
        expect(timeSince(date)).toBe("12 hours");
    });

    test("should return 1 hour", () => {
        const date = new Date(new Date() - hourInMilliseconds - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 hour");
    });

    test("should return 30 minutes", () => {
        const date = new Date(new Date() - minuteInMilliseconds * 30 - secondInMilliseconds);
        expect(timeSince(date)).toBe("30 minutes");
    });

    test("should return 1 minute", () => {
        const date = new Date(new Date() - minuteInMilliseconds - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 minute");
    });

    test("should return 30 seconds", () => {
        const date = new Date(new Date() - secondInMilliseconds * 30);
        expect(timeSince(date)).toBe("30 seconds");
    });

    test("should return 1 second", () => {
        const date = new Date(new Date() - secondInMilliseconds);
        expect(timeSince(date)).toBe("1 second");
    });

    test("should return 1 second", () => {
        const date = new Date();
        expect(timeSince(date)).toBe("1 second");
    });
});

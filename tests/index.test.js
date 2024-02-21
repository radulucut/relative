const Time = require("../index");

const yearMs = 31536000000;
const monthMs = 2592000000;
const dayMs = 86400000;
const hourMs = 3600000;
const minuteMs = 60000;
const secondMs = 1000;

describe("Time", () => {
    const timeEN = Time();
    const timeRO = Time("ro");

    describe("Relative", () => {
        test("should return 2 years ago", () => {
            const date = new Date(new Date().getTime() - yearMs * 2 - secondMs);
            expect(timeEN.Relative(date)).toBe("2 years ago");
            expect(timeRO.Relative(date)).toBe("acum 2 ani");
        });
        test("should return in 2 years", () => {
            const date = new Date(new Date().getTime() + yearMs * 2 + secondMs);
            expect(timeEN.Relative(date)).toBe("in 2 years");
            expect(timeRO.Relative(date)).toBe("peste 2 ani");
        });

        test("should return 1 year ago", () => {
            const date = new Date(new Date().getTime() - yearMs - secondMs);
            expect(timeEN.Relative(date)).toBe("1 year ago");
            expect(timeRO.Relative(date)).toBe("acum 1 an");
        });
        test("should return in 1 year", () => {
            const date = new Date(new Date().getTime() + yearMs + secondMs);
            expect(timeEN.Relative(date)).toBe("in 1 year");
            expect(timeRO.Relative(date)).toBe("peste 1 an");
        });

        test("should return 6 months ago", () => {
            const date = new Date(new Date().getTime() - monthMs * 6 - secondMs);
            expect(timeEN.Relative(date)).toBe("6 months ago");
            expect(timeRO.Relative(date)).toBe("acum 6 luni");
        });
        test("should return in 6 months", () => {
            const date = new Date(new Date().getTime() + monthMs * 6 + secondMs);
            expect(timeEN.Relative(date)).toBe("in 6 months");
            expect(timeRO.Relative(date)).toBe("peste 6 luni");
        });

        test("should return 1 month ago", () => {
            const date = new Date(new Date().getTime() - monthMs - secondMs);
            expect(timeEN.Relative(date)).toBe("1 month ago");
            expect(timeRO.Relative(date)).toBe("acum 1 lună");
        });
        test("should return in 1 month", () => {
            const date = new Date(new Date().getTime() + monthMs + secondMs);
            expect(timeEN.Relative(date)).toBe("in 1 month");
            expect(timeRO.Relative(date)).toBe("peste 1 lună");
        });

        test("should return 10 days ago", () => {
            const date = new Date(new Date().getTime() - dayMs * 10 - secondMs);
            expect(timeEN.Relative(date)).toBe("10 days ago");
            expect(timeRO.Relative(date)).toBe("acum 10 zile");

        });
        test("should return in 10 days", () => {
            const date = new Date(new Date().getTime() + dayMs * 10 + secondMs);
            expect(timeEN.Relative(date)).toBe("in 10 days");
            expect(timeRO.Relative(date)).toBe("peste 10 zile");
        });

        test("should return 1 day ago", () => {
            const date = new Date(new Date().getTime() - dayMs - secondMs);
            expect(timeEN.Relative(date)).toBe("1 day ago");
            expect(timeRO.Relative(date)).toBe("acum 1 zi");
        });
        test("should return in 1 day", () => {
            const date = new Date(new Date().getTime() + dayMs + secondMs);
            expect(timeEN.Relative(date)).toBe("in 1 day");
            expect(timeRO.Relative(date)).toBe("peste 1 zi");
        });

        test("should return 12 hours ago", () => {
            const date = new Date(new Date().getTime() - hourMs * 12 - secondMs);
            expect(timeEN.Relative(date)).toBe("12 hours ago");
            expect(timeRO.Relative(date)).toBe("acum 12 ore");
        });
        test("should return in 12 hours", () => {
            const date = new Date(new Date().getTime() + hourMs * 12 + secondMs);
            expect(timeEN.Relative(date)).toBe("in 12 hours");
            expect(timeRO.Relative(date)).toBe("peste 12 ore");
        });

        test("should return 1 hour ago", () => {
            const date = new Date(new Date().getTime() - hourMs - secondMs);
            expect(timeEN.Relative(date)).toBe("1 hour ago");
            expect(timeRO.Relative(date)).toBe("acum 1 oră");
        });
        test("should return in 1 hour", () => {
            const date = new Date(new Date().getTime() + hourMs + secondMs);
            expect(timeEN.Relative(date)).toBe("in 1 hour");
            expect(timeRO.Relative(date)).toBe("peste 1 oră");
        });

        test("should return 30 minutes ago", () => {
            const date = new Date(new Date().getTime() - minuteMs * 30 - secondMs);
            expect(timeEN.Relative(date)).toBe("30 minutes ago");
            expect(timeRO.Relative(date)).toBe("acum 30 de minute");
        });
        test("should return in 30 minutes", () => {
            const date = new Date(new Date().getTime() + minuteMs * 30 + secondMs);
            expect(timeEN.Relative(date)).toBe("in 30 minutes");
            expect(timeRO.Relative(date)).toBe("peste 30 de minute");
        });

        test("should return 1 minute ago", () => {
            const date = new Date(new Date().getTime() - minuteMs - secondMs);
            expect(timeEN.Relative(date)).toBe("1 minute ago");
            expect(timeRO.Relative(date)).toBe("acum 1 minut");
        });
        test("should return in 1 minute", () => {
            const date = new Date(new Date().getTime() + minuteMs + secondMs);
            expect(timeEN.Relative(date)).toBe("in 1 minute");
            expect(timeRO.Relative(date)).toBe("peste 1 minut");
        });

        test("should return 30 seconds ago", () => {
            const date = new Date(new Date().getTime() - secondMs * 30 - 100);
            expect(timeEN.Relative(date)).toBe("30 seconds ago");
            expect(timeRO.Relative(date)).toBe("acum 30 de secunde");
        });
        test("should return in 30 seconds", () => {
            const date = new Date(new Date().getTime() + secondMs * 30 + 100);
            expect(timeEN.Relative(date)).toBe("in 30 seconds");
            expect(timeRO.Relative(date)).toBe("peste 30 de secunde");
        })

        test("should return 1 second ago", () => {
            const date = new Date(new Date().getTime() - secondMs - 100);
            expect(timeEN.Relative(date)).toBe("1 second ago");
            expect(timeRO.Relative(date)).toBe("acum 1 secundă");
        });
        test("should return in 1 second", () => {
            const date = new Date(new Date().getTime() + secondMs + 100);
            expect(timeEN.Relative(date)).toBe("in 1 second");
            expect(timeRO.Relative(date)).toBe("peste 1 secundă");
        });

        test("should return 1 second ago", () => {
            const date = new Date(new Date().getTime() - 10);
            expect(timeEN.Relative(date)).toBe("1 second ago");
            expect(timeRO.Relative(date)).toBe("acum 1 secundă");
        });
        test("should return in 1 second", () => {
            const date = new Date(new Date().getTime() + 10);
            expect(timeEN.Relative(date)).toBe("in 1 second");
            expect(timeRO.Relative(date)).toBe("peste 1 secundă");
        });
    });
});

const Time = require("../index");
const { describe, it } = require("node:test");
const assert = require("node:assert");

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
        it("should return 2 years ago", () => {
            const date = new Date(new Date().getTime() - yearMs * 2 - secondMs);
            assert.strictEqual(timeEN.Relative(date), "2 years ago");
            assert.strictEqual(timeRO.Relative(date), "acum 2 ani");
        });
        it("should return in 2 years", () => {
            const date = new Date(new Date().getTime() + yearMs * 2 + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 2 years");
            assert.strictEqual(timeRO.Relative(date), "peste 2 ani");
        });

        it("should return 1 year ago", () => {
            const date = new Date(new Date().getTime() - yearMs - secondMs);
            assert.strictEqual(timeEN.Relative(date), "1 year ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 an");
        });
        it("should return in 1 year", () => {
            const date = new Date(new Date().getTime() + yearMs + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 1 year");
            assert.strictEqual(timeRO.Relative(date), "peste 1 an");
        });

        it("should return 6 months ago", () => {
            const date = new Date(new Date().getTime() - monthMs * 6 - secondMs);
            assert.strictEqual(timeEN.Relative(date), "6 months ago");
            assert.strictEqual(timeRO.Relative(date), "acum 6 luni");
        });
        it("should return in 6 months", () => {
            const date = new Date(new Date().getTime() + monthMs * 6 + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 6 months");
            assert.strictEqual(timeRO.Relative(date), "peste 6 luni");
        });

        it("should return 1 month ago", () => {
            const date = new Date(new Date().getTime() - monthMs - secondMs);
            assert.strictEqual(timeEN.Relative(date), "1 month ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 lună");
        });
        it("should return in 1 month", () => {
            const date = new Date(new Date().getTime() + monthMs + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 1 month");
            assert.strictEqual(timeRO.Relative(date), "peste 1 lună");
        });

        it("should return 10 days ago", () => {
            const date = new Date(new Date().getTime() - dayMs * 10 - secondMs);
            assert.strictEqual(timeEN.Relative(date), "10 days ago");
            assert.strictEqual(timeRO.Relative(date), "acum 10 zile");

        });
        it("should return in 10 days", () => {
            const date = new Date(new Date().getTime() + dayMs * 10 + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 10 days");
            assert.strictEqual(timeRO.Relative(date), "peste 10 zile");
        });

        it("should return 1 day ago", () => {
            const date = new Date(new Date().getTime() - dayMs - secondMs);
            assert.strictEqual(timeEN.Relative(date), "1 day ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 zi");
        });
        it("should return in 1 day", () => {
            const date = new Date(new Date().getTime() + dayMs + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 1 day");
            assert.strictEqual(timeRO.Relative(date), "peste 1 zi");
        });

        it("should return 12 hours ago", () => {
            const date = new Date(new Date().getTime() - hourMs * 12 - secondMs);
            assert.strictEqual(timeEN.Relative(date), "12 hours ago");
            assert.strictEqual(timeRO.Relative(date), "acum 12 ore");
        });
        it("should return in 12 hours", () => {
            const date = new Date(new Date().getTime() + hourMs * 12 + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 12 hours");
            assert.strictEqual(timeRO.Relative(date), "peste 12 ore");
        });

        it("should return 1 hour ago", () => {
            const date = new Date(new Date().getTime() - hourMs - secondMs);
            assert.strictEqual(timeEN.Relative(date), "1 hour ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 oră");
        });
        it("should return in 1 hour", () => {
            const date = new Date(new Date().getTime() + hourMs + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 1 hour");
            assert.strictEqual(timeRO.Relative(date), "peste 1 oră");
        });

        it("should return 30 minutes ago", () => {
            const date = new Date(new Date().getTime() - minuteMs * 30 - secondMs);
            assert.strictEqual(timeEN.Relative(date), "30 minutes ago");
            assert.strictEqual(timeRO.Relative(date), "acum 30 de minute");
        });
        it("should return in 30 minutes", () => {
            const date = new Date(new Date().getTime() + minuteMs * 30 + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 30 minutes");
            assert.strictEqual(timeRO.Relative(date), "peste 30 de minute");
        });

        it("should return 1 minute ago", () => {
            const date = new Date(new Date().getTime() - minuteMs - secondMs);
            assert.strictEqual(timeEN.Relative(date), "1 minute ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 minut");
        });
        it("should return in 1 minute", () => {
            const date = new Date(new Date().getTime() + minuteMs + secondMs);
            assert.strictEqual(timeEN.Relative(date), "in 1 minute");
            assert.strictEqual(timeRO.Relative(date), "peste 1 minut");
        });

        it("should return 30 seconds ago", () => {
            const date = new Date(new Date().getTime() - secondMs * 30 - 100);
            assert.strictEqual(timeEN.Relative(date), "30 seconds ago");
            assert.strictEqual(timeRO.Relative(date), "acum 30 de secunde");
        });
        it("should return in 30 seconds", () => {
            const date = new Date(new Date().getTime() + secondMs * 30 + 100);
            assert.strictEqual(timeEN.Relative(date), "in 30 seconds");
            assert.strictEqual(timeRO.Relative(date), "peste 30 de secunde");
        })

        it("should return 1 second ago", () => {
            const date = new Date(new Date().getTime() - secondMs - 100);
            assert.strictEqual(timeEN.Relative(date), "1 second ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 secundă");
        });
        it("should return in 1 second", () => {
            const date = new Date(new Date().getTime() + secondMs + 100);
            assert.strictEqual(timeEN.Relative(date), "in 1 second");
            assert.strictEqual(timeRO.Relative(date), "peste 1 secundă");
        });

        it("should return 1 second ago", () => {
            const date = new Date(new Date().getTime() - 10);
            assert.strictEqual(timeEN.Relative(date), "1 second ago");
            assert.strictEqual(timeRO.Relative(date), "acum 1 secundă");
        });
        it("should return in 1 second", () => {
            const date = new Date(new Date().getTime() + 10);
            assert.strictEqual(timeEN.Relative(date), "in 1 second");
            assert.strictEqual(timeRO.Relative(date), "peste 1 secundă");
        });
    });
});

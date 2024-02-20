# t-since (Relative Time Format)

![](https://github.com/radulucut/t-since/workflows/Node%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/t-since)](https://www.npmjs.com/package/t-since)
[![npm](https://img.shields.io/npm/dt/t-since)](https://www.npmjs.com/package/t-since)
[![GitHub](https://img.shields.io/github/license/radulucut/t-since)](https://github.com/radulucut/t-since/blob/master/LICENSE)

Format the relative time between the current date and a given date in a human readable format.
The output is rounded to the nearest time unit, i.e. `1 year ago`, `5 minutes ago`, `in 3 days`, `in 6 seconds`.

Built on top of the [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) API. Supports multiple languages and custom formatting options.

## Install

```
$ npm install t-since --save
```

## Usage

```javascript
import Time from "t-since";

const time = Time();
time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"

const timeRO = Time("ro", { numeric: "auto" });
timeRO.Relative(new Date("2024-05-01T00:00:00.000Z")); // "peste 2 luni"

const timeES = Time("es", { style: "long" });
timeES.Relative(new Date("2024-01-01T00:00:00.000Z")); // "hace 2 meses"
```

## v1 (old)

```javascript
const timeSince = require("t-since");

timeSince(new Date("2023-01-01T00:00:00.000Z")) + " ago"; // 5 months ago
```

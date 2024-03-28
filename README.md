# relative (Relative Time Format)

![](https://github.com/radulucut/relative/workflows/Node%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@radulucut/relative)](https://www.npmjs.com/package/@radulucut/relative)
[![npm](https://img.shields.io/npm/dt/@radulucut/relative)](https://www.npmjs.com/package/@radulucut/relative)
[![GitHub](https://img.shields.io/github/license/radulucut/relative)](https://github.com/radulucut/relative/blob/master/LICENSE)

Format the relative time between the current date and a given date in a human readable format.
The output is rounded to the nearest time unit, i.e. `1 year ago`, `5 minutes ago`, `in 3 days`, `in 6 seconds`.

Built on top of the [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) API. Supports multiple languages and custom formatting options.

## Install

```
$ npm install @radulucut/relative --save
```

## Usage

```javascript
import Time from "@radulucut/relative";

const time = Time();
time.Relative(new Date("2024-01-01T00:00:00.000Z")); // "2 months ago"

const timeRO = Time("ro", { numeric: "auto" });
timeRO.Relative(new Date("2024-05-01T00:00:00.000Z")); // "peste 2 luni"

const timeES = Time("es", { style: "long" });
timeES.Relative(new Date("2024-01-01T00:00:00.000Z")); // "hace 2 meses"
```

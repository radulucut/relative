# t-since (time since)

![](https://github.com/radulucut/t-since/workflows/Node%20CI/badge.svg)
[![npm](https://img.shields.io/npm/v/t-since)](https://www.npmjs.com/package/t-since)
[![npm](https://img.shields.io/npm/dt/t-since)](https://www.npmjs.com/package/t-since)
[![GitHub](https://img.shields.io/github/license/radulucut/t-since)](https://github.com/radulucut/t-since/blob/master/LICENSE)

Get the difference between a given Date and the current Date in a friendly format: i.e. 1 year, 2 months, 3 days, 4 hours, 5 minutes, 6 seconds

## Install

```
$ npm install t-since --save
```

##

## Usage

```javascript
const timeSince = require("t-since");
console.log(timeSince(new Date("2023-01-01T00:00:00.000Z")) + " ago"); // 5 months ago
```

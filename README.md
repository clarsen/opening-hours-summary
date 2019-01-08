# opening-hours-summary [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Summarize hours of operation compactly

## Installation

```sh
$ npm install --save opening-hours-summary
```

## Usage

```js
const openingHoursSummary = require('opening-hours-summary');

let summary = openingHoursSummary.summarize({
  'M(o)': 8,
  'M(c)': 23,
  'Tu(o)': 8,
  'Tu(c)': 23,
  'W(o)': 8,
  'W(c)': 23,
  'Th(o)': 8,
  'Th(c)': 23,
  'F(o)': 8,
  'F(c)': 23,
  'Sa(o)': 9.5,
  'Sa(c)': 0,
  'Su(o)': 10,
  'Su(c)': 23
  });
// summary = ['M-F 08-23', 'Sa 09:30-00', 'Su 10-23']
let earliest = openingHoursSummary.summarize({
  'M(o)': 7,
  'M(c)': 23,
  'Tu(o)': 8,
  'Tu(c)': 0,
  ...
  });
// earliest = 7
```

## License

MIT © [Case Larsen](https://caselarsen.com)


[npm-image]: https://badge.fury.io/js/opening-hours-summary.svg
[npm-url]: https://npmjs.org/package/opening-hours-summary
[travis-image]: https://travis-ci.org/clarsen/opening-hours-summary.svg?branch=master
[travis-url]: https://travis-ci.org/clarsen/opening-hours-summary
[daviddm-image]: https://david-dm.org/clarsen/opening-hours-summary.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/clarsen/opening-hours-summary
[coveralls-image]: https://coveralls.io/repos/clarsen/opening-hours-summary/badge.svg
[coveralls-url]: https://coveralls.io/r/clarsen/opening-hours-summary

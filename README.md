# npm-profile-downloads

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get downloads stats for target npm profile

## Install

    npm install --save npm-profile-downloads

## Usage

```js
import npmProfileDownloads from 'npm-profile-downloads';

npmProfileDownloads('last-month', 'sindresorhus', (err, res) => {
  if (err) throw err;
  console.log(res); // 307290898
});
```

## API

### npmProfileDownloads(period, username, cb)

#### period

*Required*  
Type: `String`

One of `last-month`, `last-week` or `last-day`.

#### username

*Required*  
Type: `String`

Valid npm username.

#### cb

*Required*  
Type: `Function`

Callback for you.

## Related

* [npm-profile-downloads-cli](https://github.com/iamstarkov/npm-profile-downloads-cli) — get downloads stats for target npm profile with cli

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/npm-profile-downloads
[npm-image]: https://img.shields.io/npm/v/npm-profile-downloads.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/npm-profile-downloads
[travis-image]: https://img.shields.io/travis/iamstarkov/npm-profile-downloads.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/npm-profile-downloads
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/npm-profile-downloads.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/npm-profile-downloads
[depstat-image]: https://david-dm.org/iamstarkov/npm-profile-downloads.svg?style=flat-square

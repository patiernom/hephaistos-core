# hephaistos-core

[![GitHub version][hephaistos-core-fury-image]][hephaistos-core-fury-url]
[![Dependency Status][hephaistos-core-dependencies-image]][hephaistos-core-dependencies-url]
[![devDependency Status][hephaistos-core-devdependencies-image]][hephaistos-core-devdependencies-url]
[![Build Status][hephaistos-core-travis-image]][hephaistos-core-travis-url]
[![Coverage Status][hephaistos-core-coverage-image]][hephaistos-core-coverage-url]

# Hephaistos core
Hapi.js server core Glue composition.

## Installation

The easiest way is to keep `hephaistos-core` as a dependency in your `package.json`.
```json
{
  "dependencies": {
    "hephaistos-core": "1.0.0"
  }
}
```

You can simple do it by:
```bash
npm install hephaistos-core --save
```

## Example
```javascript
var hephaistosCore = require('hephaistos-core');
var options = {
    relativeTo: '../my/source/dir'
}
var pathOfManifest = 'path/to/config.json';

module.exports = (function(){
    hephaistosCore(pathOfManifest, options).start();
})();
```

## Usage
`hephaistos-core` is a function that takes the following arguments:

* pathOfManifest - (required) the of Hapi.js manifest file.
* options - (required) an object that contain options for Hapi.js Glue.


## Release History

_(Nothing yet)_


## License

Licensed under the MIT license.

[hephaistos-core-fury-image]: https://badge.fury.io/js/hephaistos-core.svg
[hephaistos-core-fury-url]: https://badge.fury.io/js/hephaistos-core
[hephaistos-core-dependencies-image]: https://david-dm.org/patiernom/hephaistos-core.svg
[hephaistos-core-dependencies-url]: https://david-dm.org/patiernom/hephaistos-core
[hephaistos-core-devdependencies-image]: https://david-dm.org/patiernom/hephaistos-core/dev-status.svg
[hephaistos-core-devdependencies-url]: https://david-dm.org/patiernom/hephaistos-core#info=devDependencies
[hephaistos-core-peerdependencies-image]: https://david-dm.org/patiernom/hephaistos-core/peer-status.svg
[hephaistos-core-peerdependencies-url]: https://david-dm.org/patiernom/hephaistos-core#info=peerDependencies
[hephaistos-core-travis-image]: https://travis-ci.org/patiernom/hephaistos-core.svg?branch=master
[hephaistos-core-travis-url]: https://travis-ci.org/patiernom/hephaistos-core
[hephaistos-core-coverage-image]: https://coveralls.io/repos/github/patiernom/hephaistos-core/badge.svg?branch=master
[hephaistos-core-coverage-url]: https://coveralls.io/github/patiernom/hephaistos-core?branch=master
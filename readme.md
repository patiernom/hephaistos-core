# hephaistos-core
Server core Glue composition for Hapi.js

## Installation

The easiest way is to keep `hephaistos-core` as a devDependency in your `package.json`.
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
var poseidonCore = require('poseidon-core');
var options = {
    relativeTo: '../my/source/dir'
}
var manifestFilePath = 'path/to/config.json';

module.exports = (function(){
    poseidonCore(manifestFilePath, options).start();
})();
```

## Usage
`poseidon-core` is a function that takes the following arguments:

* manifestFilePath - (required) the of Hapi.js manifest file.
* options - (required) an object that contain options for Hapi.js Glue.


## Release History

_(Nothing yet)_


## License

Licensed under the MIT license.

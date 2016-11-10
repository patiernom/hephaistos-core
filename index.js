'use strict';

//require('rconsole');

var Glue = require('glue'),
    failFast = require('fp-error-handling'),
    configuration = require('json-displace'),
    async = require('async');

module.exports = function (pathOfManifest, options) {
    var manifest = require(pathOfManifest);

    return {

        start: () => {

            let setEnvVariables = (pathOfManifest) => {
                process.env.NODE_MANIFEST = pathOfManifest;
            };

            let fastLog = (keyValue, next) => {
                configuration.findJson(__dirname, files =>
                    files.labels(content => keyValue(content),
                        displaced => {
                            console.log(displaced);
                            if (next) {
                                next(null);
                            }
                        }
                    )
                )
            };

            async.waterfall([
                    cb => fastLog(data => [data.notice.loaded, {manifestName: pathOfManifest}], cb),
                    cb => {
                        setEnvVariables(pathOfManifest);
                        cb(null)
                    },
                    cb => {
                        Glue.compose(manifest, options, failFast(
                            err => fastLog(data => [data.error.composition, {stackTrace: err}]),
                            server => server.start(failFast(
                                err => fastLog(data => [data.error.startupFailed, err]),
                                () => manifest.connections.forEach(
                                    element => fastLog(data => [data.notice.listening, {
                                        host: element.host,
                                        port: element.port
                                    }])
                                )
                            ))
                        ))
                    }
                ],
                failFast(err => console.log('unable to complete startup operations:' + err + ', stackTrace:' + err.stackTrace), () => { })
            )
        }
    }
};

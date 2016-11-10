'use strict';

//require('rconsole');

var Glue = require('glue'),
    fastError = require('fp-error-handling'),
    config = require('json-displace'),
    async = require('async');

module.exports = function (manifestFilePath, options) {
    var manifest = require(manifestFilePath);

    return {

        start: () => {

            let setEnvVariables = (manifestFilePath) => {
                process.env.NODE_MANIFEST = manifestFilePath;
            };

            let fastLog = (contentTuple, next) => {
                config.findJson(__dirname, files =>
                    files.labels(content => contentTuple(content),
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
                    cb => fastLog(data => [data.notice.loaded, {manifestName: manifestFilePath}], cb),
                    cb => {
                        setEnvVariables(manifestFilePath);
                        cb(null)
                    },
                    cb => {
                        Glue.compose(manifest, options, fastError(
                            err => fastLog(data => [data.error.composition, {stackTrace: err}]),
                            server => server.start(fastError(
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
                fastError(err => console.log('unable to complete startup phase:' + err + ', stackTrace:' + err.stackTrace), () => { })
            )
        }
    }
};

$_mod.def("/warp10$1.3.3/src/stringify", function(require, exports, module, __filename, __dirname) { 'use strict';
const stringifyPrepare = require('/warp10$1.3.3/src/stringifyPrepare'/*'./stringifyPrepare'*/);
const escapeEndingScriptTagRegExp = /<\//g;

module.exports = function stringify(obj, options) {
    var safe;

    if (options) {
        safe = options.safe === true;
    } else {
        safe = false;
    }

    var final = stringifyPrepare(obj);

    let json = JSON.stringify(final);
    if (safe) {
        json = json.replace(escapeEndingScriptTagRegExp, '\\u003C/');
    }

    return json;
};
});
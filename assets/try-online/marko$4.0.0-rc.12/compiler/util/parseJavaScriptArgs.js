$_mod.def("/marko$4.0.0-rc.12/compiler/util/parseJavaScriptArgs", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('/assert$1.3.0/assert'/*'assert'*/).ok;

function parseJavaScriptArgs(args, builder) {
    ok(typeof args === 'string', '"args" should be a string');
    ok(builder, '"builder" is required');

    var parsed = builder.parseExpression('[' + args + ']');
    return parsed.elements;
}

module.exports = parseJavaScriptArgs;
});
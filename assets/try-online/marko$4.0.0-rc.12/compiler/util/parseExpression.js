$_mod.def("/marko$4.0.0-rc.12/compiler/util/parseExpression", function(require, exports, module, __filename, __dirname) { var parseJavaScript = require('/marko$4.0.0-rc.12/compiler/util/parseJavaScript'/*'./parseJavaScript'*/);

module.exports = function(src, builder) {
    return parseJavaScript(src, builder, true /* isExpression */ );
};
});
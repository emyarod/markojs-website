$_mod.def("/marko$4.0.0-rc.12/compiler/util/resolve-browser", function(require, exports, module, __filename, __dirname) { var nodePath = require('/path-browserify$0.0.0/index'/*'path'*/);

module.exports = function(target, from) {
    return nodePath.join(from, target);
};
});
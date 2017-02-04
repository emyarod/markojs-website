$_mod.def("/marko$4.0.0-rc.12/compiler/util/fingerprint", function(require, exports, module, __filename, __dirname) { var sha1 = require('/simple-sha1$2.1.0/browser'/*'simple-sha1'*/);

module.exports = function(str) {
    return sha1.sync(str);
};
});
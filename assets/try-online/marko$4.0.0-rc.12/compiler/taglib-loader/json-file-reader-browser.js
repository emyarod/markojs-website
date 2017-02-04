$_mod.def("/marko$4.0.0-rc.12/compiler/taglib-loader/json-file-reader-browser", function(require, exports, module, __filename, __dirname) { exports.readFileSync = function (path) {
    var taglibProps;

    try {
        taglibProps = require(path);
    } catch(e) {
        throw new Error('Unable to parse taglib JSON at path "' + path + '". Exception: ' + e);
    }

    return taglibProps;
};
});
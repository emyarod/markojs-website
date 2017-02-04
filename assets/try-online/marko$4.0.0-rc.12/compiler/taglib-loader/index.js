$_mod.def("/marko$4.0.0-rc.12/compiler/taglib-loader/index", function(require, exports, module, __filename, __dirname) { var types = require('/marko$4.0.0-rc.12/compiler/taglib-loader/types'/*'./types'*/);

var cache = {};

function load(path) {
    // Only load a taglib once by caching the loaded taglibs using the file
    // system path as the key
    if (cache[path]) {
        return cache[path];
    }

    var taglib = cache[path] = new types.Taglib(path);

    exports.taglibLoader.loadTaglib(path, taglib);

    cache[path] = taglib;

    return taglib;
}

exports.clearCache = function() {
    cache = {};
};

exports.load = load;
exports.taglibLoader = require('/marko$4.0.0-rc.12/compiler/taglib-loader/loader-taglib'/*'./loader-taglib'*/);
exports.tagLoader = require('/marko$4.0.0-rc.12/compiler/taglib-loader/loader-tag'/*'./loader-tag'*/);
exports.attributeLoader = require('/marko$4.0.0-rc.12/compiler/taglib-loader/loader-attribute'/*'./loader-attribute'*/);
});
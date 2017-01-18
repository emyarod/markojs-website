$_mod.def("/warp10$1.3.3/src/parse", function(require, exports, module, __filename, __dirname) { var finalize = require('/warp10$1.3.3/src/finalize'/*'./finalize'*/);

module.exports = function parse(json) {
    if (json === undefined) {
        return undefined;
    }

    var outer = JSON.parse(json);
    return finalize(outer);
};
});
$_mod.def("/marko$4.0.0-rc.12/taglibs/core/function-tag", function(require, exports, module, __filename, __dirname) { module.exports = function functionCodeGenerator(el, codegen) {
    return codegen.builder.expression(el.tagString);
};
});
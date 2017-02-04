$_mod.def("/marko$4.0.0-rc.12/taglibs/core/macro-body-tag", function(require, exports, module, __filename, __dirname) { module.exports = function codeGenerator(elNode, codegen) {
    var builder = codegen.builder;
    
    return builder.ifStatement(builder.identifier('renderBody'), [
        builder.functionCall('renderBody', ['out'])
    ]);
};
});
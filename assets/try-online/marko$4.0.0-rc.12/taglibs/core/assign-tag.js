$_mod.def("/marko$4.0.0-rc.12/taglibs/core/assign-tag", function(require, exports, module, __filename, __dirname) { module.exports = function codeGenerator(elNode, generator) {
    var attributes = elNode.attributes;

    if (!attributes) {
        generator.addError('Invalid <assign> tag. Argument is missing. Example; <assign x=123 />');
        return elNode;
    }

    var builder = generator.builder;

    return attributes.map((attr) => {
        if (attr.value == null) {
            return builder.parseExpression(attr.name);
        } else {
            return builder.assignment(attr.name, attr.value);
        }
    });
};
});
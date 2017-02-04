$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/widget-types-tag", function(require, exports, module, __filename, __dirname) { var getTransformHelper = require('/marko$4.0.0-rc.12/widgets/taglib/util/getTransformHelper'/*'./util/getTransformHelper'*/);

module.exports = function codeGenerator(el, codegen) {
    var context = codegen.context;
    var transformHelper = getTransformHelper(el, context);

    transformHelper.isLegacyWidget = true;

    var builder = codegen.builder;

    var attrs = el.getAttributes();

    var typesObject = {};

    attrs.forEach((attr) => {
        if (!attr.isLiteralString()) {
            codegen.addError('Widget type should be a string');
            return;
        }

        typesObject[attr.name] = transformHelper.buildWidgetTypeNode(attr.literalValue);
    });

    codegen.addStaticVar('marko_widgetTypes', builder.literal(typesObject));

    return null;
};
});
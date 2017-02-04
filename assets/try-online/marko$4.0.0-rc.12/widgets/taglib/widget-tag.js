$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/widget-tag", function(require, exports, module, __filename, __dirname) { 'use strict';

var BIND_WIDGET_KEY = Symbol();
module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;
    var context = codegen.context;

    var bodyFunc = builder.renderBodyFunction(el.body, [
            builder.identifierOut(),
            builder.identifier('widget'),
            builder.identifier('state')
        ]);


    var widgetProps = el.getAttributeValue('props');

    var bindWidgetVar = context.addStaticVar('marko_bindWidget',
        builder.require(
            builder.literal('marko/widgets/taglib/helpers/bindWidget')));

    if (context.data[BIND_WIDGET_KEY] == null) {
        context.data[BIND_WIDGET_KEY] = 0;
    }

    var varName = context.addStaticVar(
        'marko_bindWidget' + (context.data[BIND_WIDGET_KEY]++),
        builder.functionCall(bindWidgetVar, [
                widgetProps
            ]));

    return builder.functionCall(varName, [bodyFunc, builder.identifierOut()]);
};
});
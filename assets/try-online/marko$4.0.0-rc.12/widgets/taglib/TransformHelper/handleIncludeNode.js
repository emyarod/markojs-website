$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/TransformHelper/handleIncludeNode", function(require, exports, module, __filename, __dirname) { 'use strict';

var includeTagForWidgets = require.resolve('/marko$4.0.0-rc.12/widgets/taglib/include-tag'/*'../include-tag'*/);

module.exports = function(includeNode) {
    var builder = this.builder;
    var context = this.context;

    if (!this.hasBoundWidgetForTemplate()) {
        return;
    }

    var parentNode = includeNode.parentNode;

    if (!parentNode.hasAttribute) {
        return;
    }

    parentNode._normalizeChildTextNodes(context, true /* force trim */);

    if (parentNode.childCount === 1) {
        if (includeNode.hasAttribute('ref')) {
            this.assignWidgetId();
        }

        let parentTransformHelper = this.getTransformHelper(parentNode);

        if (includeNode.data.bodySlot) {
            parentTransformHelper.assignWidgetId(false /* not repeated */);
            var widgetProps = this.getWidgetProps();
            widgetProps.body = parentTransformHelper.getNestedIdExpression();
        } else {
            let widgetIdInfo = parentTransformHelper.assignWidgetId(true /* repeated */);
            if (!widgetIdInfo.idVarNode) {
                let idVarNode = widgetIdInfo.createIdVarNode();
                parentNode.onBeforeGenerateCode((event) => {
                    event.insertCode(idVarNode);
                });
            }
        }

        includeNode.setRendererPath(includeTagForWidgets);

        includeNode.onBeforeGenerateCode(function() {
            includeNode.addProp('_elId', parentTransformHelper.getIdExpression());
            includeNode.addProp('_arg', builder.identifier('widget'));
        });
    }



    // includeNode.generateCodeForDynamicInclude = (options, codegen) => {
    //     var target = options.target;
    //     var data = options.data;
    //
    //     if (!data) {
    //         data = builder.literal(null);
    //     }
    //
    //     let includeVar = context.importModule('marko_widget_include', this.getMarkoWidgetsRequirePath('marko/widgets/taglib/helpers/include'));
    //
    //     let includeArgs = [
    //         target,
    //         builder.identifierOut(),
    //         data
    //     ];
    //
    //     if (parentTransformHelper) {
    //         includeArgs = includeArgs.concat([
    //             parentTransformHelper.getIdExpression(),
    //
    //         ]);
    //     }
    //
    //     return builder.functionCall(includeVar, includeArgs);
    // };
};

});
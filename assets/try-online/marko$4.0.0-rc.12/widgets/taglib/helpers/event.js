$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/helpers/event", function(require, exports, module, __filename, __dirname) { module.exports = function eventAttr(handlerMethodName, widgetId, extraArgs) {
    if (!handlerMethodName) {
        return;
    }

    return extraArgs ? [handlerMethodName, widgetId].concat(extraArgs) : [handlerMethodName, widgetId];
};
});
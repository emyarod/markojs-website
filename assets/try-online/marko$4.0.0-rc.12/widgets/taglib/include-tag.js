$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/include-tag", function(require, exports, module, __filename, __dirname) { var normalInclude = require('/marko$4.0.0-rc.12/taglibs/core/include-tag'/*'../../taglibs/core/include-tag'*/);
var WidgetsContext = require('/marko$4.0.0-rc.12/widgets/WidgetsContext'/*'../WidgetsContext'*/);
var getElementById = require('/marko$4.0.0-rc.12/widgets/util-browser'/*'../util'*/).$__getElementById;

module.exports = function include(input, out) {
    var target = input._target;

    if (target != null) {
        normalInclude(input, out);
    } else if (getElementById) {
        var elId = input._elId;

        // There's no body content so let's see if we should reuse
        // the existing body content in the DOM
        var existingEl = getElementById(out.$__document, elId);
        if (existingEl) {
            var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
            widgetsContext.$__preserveDOMNode(elId, true /* body only */);
        }
    }
};

});
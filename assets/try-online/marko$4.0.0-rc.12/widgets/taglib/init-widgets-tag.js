$_mod.def("/marko$4.0.0-rc.12/widgets/taglib/init-widgets-tag", function(require, exports, module, __filename, __dirname) { const INIT_WIDGET_KEY = Symbol();

var writeInitWidgetsCode = require('/marko$4.0.0-rc.12/widgets/index-browser'/*'../'*/).writeInitWidgetsCode;
var WidgetsContext = require('/marko$4.0.0-rc.12/widgets/WidgetsContext'/*'../WidgetsContext'*/);

module.exports = function render(input, out) {
    var global = out.global;
    if (!global[INIT_WIDGET_KEY]) {
        global[INIT_WIDGET_KEY] = true;

        out.on('await:beforeRender', function(eventArgs) {
            if (eventArgs.clientReorder) {
                var asyncFragmentOut = eventArgs.out;
                asyncFragmentOut.data.widgets = new WidgetsContext(asyncFragmentOut);
            }
        });

        out.on('await:finish', function(eventArgs) {
            var asyncFragmentOut = eventArgs.out;

            var widgetsContext = asyncFragmentOut.data.widgets || asyncFragmentOut.global.widgets;
            if (widgetsContext) {
                writeInitWidgetsCode(widgetsContext, asyncFragmentOut);
            }
        });

        if (out.isSync()) {
            var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
            writeInitWidgetsCode(widgetsContext, out);
        } else {
            var asyncOut = out.beginAsync({ last: true, timeout: -1 });
            out.onLast(function(next) {
                var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
                writeInitWidgetsCode(widgetsContext, asyncOut);
                asyncOut.end();
                next();
            });
        }


    }
};
});
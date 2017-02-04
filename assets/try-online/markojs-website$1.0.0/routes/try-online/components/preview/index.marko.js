$_mod.def("/markojs-website$1.0.0/routes/try-online/components/preview/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onInput: function (input) {
        this.state = { file: input.file };
    },
    onMount: function () {
        this.subscribeTo(app).on('file:modified', file => {
            if (file.path === this.state.file.path) {
                var template = getTemplate(file);
                template.renderSync().replaceChildrenOf(this.el);
            }
        });
    }
}),
    marko_widgets = require('/marko$4.0.0-rc.12/widgets/index-browser'/*"marko/widgets"*/),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/markojs-website$1.0.0/routes/try-online/components/preview/index.marko", function() {
      return module.exports;
    }),
    vmodules = require('/markojs-website$1.0.0/routes/try-online/app/vmodules'/*"~/routes/try-online/app/vmodules"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    marko_helpers = require('/marko$4.0.0-rc.12/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require('/marko$4.0.0-rc.12/widgets/taglib/include-tag'/*"marko/widgets/taglib/include-tag"*/));

function getTemplate(file) {
    var module = vmodules.loadFile(file.path);
    return module.exports;
};

function render(input, out, widget, state) {
  var data = input;

  var file = state.file;

  var __widgetId0 = widget.id;

  out.be("div", {
      "class": "preview",
      id: __widgetId0
    });

  include_tag({
      _target: getTemplate(file),
      _elId: __widgetId0,
      _arg: widget
    }, out);

  out.ee();
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css",
      {
          type: "require",
          path: "/Users/mirawlings/code/markojs-website/routes/try-online/components/preview/index.marko"
        },
      {
          type: "require",
          path: "/Users/mirawlings/code/marko/widgets/index.js"
        }
    ],
    tags: [
      "marko/widgets/taglib/include-tag"
    ]
  };

});
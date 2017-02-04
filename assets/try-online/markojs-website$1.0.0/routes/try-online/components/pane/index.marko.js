$_mod.def("/markojs-website$1.0.0/routes/try-online/components/pane/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.0.0-rc.12/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = ({
    onInput: function (input) {
        var focusedFile = input.focusedFile;
        var activeIndex = this.state && this.state.activeIndex;
        this.state = {
            files: input.files,
            activeIndex: activeIndex == null ? 0 : activeIndex,
            focusedIndex: -1
        };
        this.state.focusedIndex = -1;
        this.state.files.forEach((file, i) => {
            if (file.path === focusedFile) {
                this.state.activeIndex = i;
                this.state.focusedIndex = i;
            }
        });
    },
    handleTabClick: function (index) {
        app.focusFile(this.state.files[index].path);
    }
}),
    marko_widgets = require('/marko$4.0.0-rc.12/widgets/index-browser'/*"marko/widgets"*/),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/markojs-website$1.0.0/routes/try-online/components/pane/index.marko", function() {
      return module.exports;
    }),
    markoWidgets_event = require('/marko$4.0.0-rc.12/widgets/taglib/helpers/event'/*"marko/widgets/taglib/helpers/event"*/),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    marko_forEachProp = require('/marko$4.0.0-rc.12/runtime/helper-forEachProperty'/*"marko/runtime/helper-forEachProperty"*/),
    marko_classAttr = marko_helpers.ca,
    preview_template = require('/markojs-website$1.0.0/routes/try-online/components/preview/index.marko'/*"../preview"*/),
    marko_loadTag = marko_helpers.t,
    preview_tag = marko_loadTag(preview_template),
    w_preserve_tag = marko_loadTag(require('/marko$4.0.0-rc.12/widgets/taglib/preserve-tag'/*"marko/widgets/taglib/preserve-tag"*/)),
    editor_template = require('/markojs-website$1.0.0/routes/try-online/components/editor/index.marko'/*"../editor"*/),
    editor_tag = marko_loadTag(editor_template),
    marko_attrs0 = {
        "class": "tabs"
      },
    marko_attrs1 = {
        "class": "tabs"
      },
    marko_attrs2 = {
        "class": "bodies"
      },
    marko_attrs3 = {
        "class": "tab-label"
      },
    marko_attrs4 = {
        "class": "tab-label"
      };

function render(input, out, widget, state) {
  var data = input;

  out.be("div", {
      "class": "pane",
      id: widget.id
    });

  out.be("div", marko_attrs0);

  out.be("ul", marko_attrs1);

  marko_forEachProp(state.files, function(i, file) {
    out.be("li", {
        "class": marko_classAttr(marko_classList("tab", [
            (state.focusedIndex === i) && "focused",
            (state.activeIndex === i) && "active"
          ])),
        id: widget.elId("body-" + file.path),
        "data-_onclick": markoWidgets_event("handleTabClick", widget.id, [
            i
          ])
      });

    if (file.preview) {
      out.e("span", marko_attrs3, 2)
        .t(file.name)
        .t(" (Preview)");
    } else {
      out.e("span", marko_attrs4, 1)
        .t(file.name);
    }

    out.ee();
  });

  out.ee();

  out.ee();

  out.be("div", marko_attrs2);

  marko_forEachProp(state.files, function(i, file) {
    out.be("div", {
        "class": marko_classAttr(marko_classList("pane-body", [
            (state.focusedIndex === i) && "focused",
            (state.activeIndex === i) && "active"
          ]))
      });

    if (file.preview) {
      var __widgetId0 = widget.elId("preview-" + file.path);

      w_preserve_tag({
          id: __widgetId0,
          renderBody: function renderBody(out) {
            preview_tag({
                file: file,
                $w: [
                  widget,
                  "#" + __widgetId0
                ]
              }, out);
          }
        }, out);
    } else {
      var __widgetId1 = widget.elId("editor-" + file.path);

      w_preserve_tag({
          id: __widgetId1,
          renderBody: function renderBody(out) {
            editor_tag({
                file: file,
                $w: [
                  widget,
                  "#" + __widgetId1
                ]
              }, out);
          }
        }, out);
    }

    out.ee();
  });

  out.ee();

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
          path: "/Users/mirawlings/code/markojs-website/routes/try-online/components/pane/index.marko"
        },
      {
          type: "require",
          path: "/Users/mirawlings/code/marko/widgets/index.js"
        }
    ],
    tags: [
      "../preview",
      "marko/widgets/taglib/preserve-tag",
      "../editor"
    ]
  };

});
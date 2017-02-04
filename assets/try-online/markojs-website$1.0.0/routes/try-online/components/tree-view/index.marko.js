$_mod.def("/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.0.0-rc.12/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_classList = marko_helpers.cl,
    marko_component = {
        onInput: function(input) {
          this.state = {
              rootDir: input.rootDir,
              focusedFile: input.focusedFile,
              focusedDirectory: input.focusedDirectory
            };
        },
        handleFileClick: function(dirPath, event) {
          app.focusFile(dirPath);

          event.stopPropagation();
        }
      },
    markoWidgets_event = require('/marko$4.0.0-rc.12/widgets/taglib/helpers/event'/*"marko/widgets/taglib/helpers/event"*/),
    marko_widgets = require('/marko$4.0.0-rc.12/widgets/index-browser'/*"marko/widgets"*/),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    path = require('/path-browserify$0.0.0/index'/*"path"*/),
    marko_classAttr = marko_helpers.ca,
    marko_forEach = marko_helpers.f;

function isFocusedFile(file, state) {
    return state.focusedFile === file.path;
}

function isFocusedDir(dir, state) {
    if (!state.focusedDirectory) {
        return false;
    }
    return dir.path === state.focusedDirectory || state.focusedDirectory.startsWith(dir.path + '/');
};

function render(input, out, widget, state) {
  var data = input;

  function macro_render_file_li(file, out, renderBody) {
    out.e("li", {
        "class": marko_classAttr(marko_classList("file", {
            focused: isFocusedFile(file, state)
          })),
        "data-_onclick": markoWidgets_event("handleFileClick", widget.id, [
            file.path
          ])
      }, 1)
      .e("span", null, 1)
        .t(file.name);
  }

  function macro_render_dir_li(dir, out, renderBody) {
    out.be("li", {
        "class": marko_classAttr(marko_classList("dir", {
            focused: isFocusedDir(dir, state)
          })),
        "data-_onclick": markoWidgets_event("handleFileClick", widget.id, [
            dir.path
          ])
      });

    out.e("label", null, 1)
      .t(dir.name);

    if (dir.files) {
      out.be("ul");

      marko_forEach(dir.files, function(file) {
        macro_render_li(file, out);
      });

      out.ee();
    }

    out.ee();
  }

  function macro_render_li(file, out, renderBody) {
    if (file.isDirectory()) {
      macro_render_dir_li(file, out);
    } else {
      macro_render_file_li(file, out);
    }
  }

  out.be("div", {
      "class": "tree-view",
      id: widget.id
    });

  out.be("ul");

  marko_forEach(state.rootDir.files, function(file) {
    macro_render_li(file, out);
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
          path: "/Users/mirawlings/code/markojs-website/routes/try-online/components/tree-view/index.marko"
        },
      {
          type: "require",
          path: "/Users/mirawlings/code/marko/widgets/index.js"
        }
    ]
  };

});
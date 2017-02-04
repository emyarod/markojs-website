$_mod.def("/markojs-website$1.0.0/routes/try-online/components/app/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onInput: function (input) {
        this.state = input.state;
        this.state.unmounted = true;
    },
    onMount: function () {
        app.initialize(this.state);
        app.onStateChange(newState => {
            this.state = newState;
        });
        app.focusFile('/get-started');
        this.state.unmounted = false;
    }
}),
    marko_widgets = require('/marko$4.0.0-rc.12/widgets/index-browser'/*"marko/widgets"*/),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/markojs-website$1.0.0/routes/try-online/components/app/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/),
    pane_template = require('/markojs-website$1.0.0/routes/try-online/components/pane/index.marko'/*"../pane"*/),
    marko_helpers = require('/marko$4.0.0-rc.12/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    pane_tag = marko_loadTag(pane_template),
    marko_classAttr = marko_helpers.ca,
    try_loader_template = require('/markojs-website$1.0.0/routes/try-online/components/try-loader/index.marko'/*"../try-loader"*/),
    try_loader_tag = marko_loadTag(try_loader_template),
    tree_view_template = require('/markojs-website$1.0.0/routes/try-online/components/tree-view/index.marko'/*"../tree-view"*/),
    tree_view_tag = marko_loadTag(tree_view_template),
    marko_attrs0 = {
        "class": "workspace"
      },
    marko_attrs1 = {
        "class": "tree-view-container"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("c22f89"),
    marko_node0 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_attrs2 = {
        "class": "editors-container"
      },
    marko_attrs3 = {
        "class": "inputs-container"
      },
    marko_node1 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_node2 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_node3 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_attrs4 = {
        "class": "outputs-container"
      },
    marko_node4 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_node5 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_node6 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId()),
    marko_node7 = marko_createElement("div", {
        "class": "divider"
      }, 0, marko_const_nextId());

function render(input, out, widget, state) {
  var data = input;

  var panes = state.panes;

  var visibleTabsByPane = state.visibleTabsByPane;

  function macro_renderPane(paneName, out, renderBody) {
    if (panes[paneName].length) {
      out.be("div", {
          "class": marko_classAttr(paneName)
        });

      pane_tag({
          files: panes[paneName],
          focusedFile: state.focusedFile
        }, out);

      out.ee();
    }
  }

  out.be("div", {
      "class": "try-online",
      id: widget.id
    });

  if (state.unmounted) {
    try_loader_tag({}, out);
  }

  out.be("div", marko_attrs0);

  out.be("div", marko_attrs1);

  tree_view_tag({
      rootDir: state.rootDir,
      focusedFile: state.focusedFile,
      focusedDirectory: state.focusedDirectory
    }, out);

  out.ee();

  out.n(marko_node0);

  out.be("div", marko_attrs2);

  out.be("div", marko_attrs3);

  out.n(marko_node1);

  macro_renderPane("inputTop", out);

  if (panes["inputTop"].length && panes["inputBottom"].length) {
    out.n(marko_node6);
  }

  macro_renderPane("inputBottom", out);

  out.n(marko_node2);

  out.ee();

  out.n(marko_node3);

  out.be("div", marko_attrs4);

  out.n(marko_node4);

  macro_renderPane("outputTop", out);

  if (panes["outputTop"].length && panes["outputBottom"].length) {
    out.n(marko_node7);
  }

  macro_renderPane("outputBottom", out);

  out.n(marko_node5);

  out.ee();

  out.ee();

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
          path: "/Users/mirawlings/code/markojs-website/routes/try-online/components/app/index.marko"
        },
      {
          type: "require",
          path: "/Users/mirawlings/code/marko/widgets/index.js"
        }
    ],
    tags: [
      "../pane",
      "../try-loader",
      "../tree-view"
    ]
  };

});
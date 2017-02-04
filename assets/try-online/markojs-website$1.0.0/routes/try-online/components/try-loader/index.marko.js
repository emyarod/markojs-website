$_mod.def("/markojs-website$1.0.0/routes/try-online/components/try-loader/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_helpers = require('/marko$4.0.0-rc.12/runtime/vdom/helpers'/*"marko/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("b42d73"),
    marko_node0 = marko_createElement("div", {
        "class": "try-loader-container"
      }, 1, marko_const_nextId())
      .e("div", {
          "class": "try-loader"
        }, 1)
        .e("span", {
            "class": "green-loader"
          }, 0);

function render(input, out) {
  var data = input;

  out.n(marko_node0);
}

marko_template._ = render;

marko_template.meta = {
    deps: [
      "./style.css"
    ]
  };

});
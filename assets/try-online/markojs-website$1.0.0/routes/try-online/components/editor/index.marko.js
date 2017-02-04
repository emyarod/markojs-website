$_mod.def("/markojs-website$1.0.0/routes/try-online/components/editor/index.marko", function(require, exports, module, __filename, __dirname) { var marko_template = module.exports = require('/marko$4.0.0-rc.12/vdom'/*"marko/vdom"*/).t(),
    marko_component = ({
    onInput: function (input) {
        this.state = { file: input.file };
    },
    onMount: function () {
        var code = this.state.file.text;
        var codeMirrorConfig = {
            value: code || '',
            mode: 'Marko',
            lineNumbers: true,
            readOnly: false,
            indentUnit: 4
        };
        codeMirrorConfig.theme = 'marko';
        this.codeMirror = CodeMirror(this.el, codeMirrorConfig);
        this.codeMirror.setSize('100%', '100%');
        this.codeMirror.on('change', editor => {
            var file = this.state.file;
            var source = editor.getValue();
            app.updateFile(file.path, source);
        });
    }
}),
    marko_widgets = require('/marko$4.0.0-rc.12/widgets/index-browser'/*"marko/widgets"*/),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/markojs-website$1.0.0/routes/try-online/components/editor/index.marko", function() {
      return module.exports;
    }),
    app = require('/markojs-website$1.0.0/routes/try-online/app/index'/*"~/routes/try-online/app"*/);

var CodeMirror;

if (typeof window !== 'undefined') {
    CodeMirror = require('/codemirror$5.23.0/lib/codemirror'/*'codemirror'*/);
    require('/codemirror-atom-modes$1.0.1/src/index'/*'codemirror-atom-modes'*/).registerGrammars([
            require('/language-css$0.42.0/grammars/css.cson'/*'language-css/grammars/css.cson'*/),
            require('/language-javascript$0.125.1/grammars/javascript.cson'/*'language-javascript/grammars/javascript.cson'*/),
            {
                grammar: require('/language-marko$2.8.0/grammars/marko.cson'/*'language-marko/grammars/marko.cson'*/),
                options: {
                    scopeTranslations: {
                        'meta.section.marko-placeholder': 'strong',
                        'meta.section.marko-attribute': 'strong',
                        'support.function.marko-tag': 'strong tag',
                        'support.function.marko-attribute': 'strong attribute'
                    }
                }
            }
        ], CodeMirror);
};

function render(input, out, widget, state) {
  var data = input;

  var file = state.file;

  out.e("div", {
      "class": "editor",
      id: widget.id
    }, 0);
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
          path: "/Users/mirawlings/code/markojs-website/routes/try-online/components/editor/index.marko"
        },
      {
          type: "require",
          path: "/Users/mirawlings/code/marko/widgets/index.js"
        }
    ]
  };

});
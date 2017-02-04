$_mod.def("/marko$4.0.0-rc.12/taglibs/html/html-comment-tag", function(require, exports, module, __filename, __dirname) { 'use strict';
module.exports = function render(input, out) {
    if (out.write) {
        out.write('<!--');
        if (input.renderBody) {
            input.renderBody(out);
        }
        out.write('-->');
    }

};

});
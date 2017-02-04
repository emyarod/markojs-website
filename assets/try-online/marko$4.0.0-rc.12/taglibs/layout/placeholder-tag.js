$_mod.def("/marko$4.0.0-rc.12/taglibs/layout/placeholder-tag", function(require, exports, module, __filename, __dirname) { module.exports = function render(input, out) {
    var contentMap = input.content;
    var content = contentMap ? contentMap[input.name] : null;
    if (content) {
        if (content.value) {
            out.write(content.value);
        } else if (content.renderBody) {
            content.renderBody(out);
        }
    } else {
        if (input.renderBody) {
            input.renderBody(out);
        }
    }
};
});
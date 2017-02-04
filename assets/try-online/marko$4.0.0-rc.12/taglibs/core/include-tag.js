$_mod.def("/marko$4.0.0-rc.12/taglibs/core/include-tag", function(require, exports, module, __filename, __dirname) { module.exports = function include(input, out) {
    var target = input._target;
    var arg = input._arg || input;

    if (target) {
        if (typeof target === 'function') {
            target(out, arg);
        } else if (typeof target === 'string') {
            out.text(target);
        } else if (typeof target === 'object') {
            if (target.renderBody) {
                target.renderBody(out, arg);
            } else if (target.renderer) {
                target.renderer(arg, out);
            } else if (target.render) {
                target.render(arg, out);
            } else if (target.safeHTML) {
                out.write(target.safeHTML);
            }
        } else {
            throw new Error('Invalid include target: ' + target);
        }
    }
};

});
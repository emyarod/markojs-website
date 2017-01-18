$_mod.def("/markojs-website$1.0.0/components/site-search/widget", function(require, exports, module, __filename, __dirname) { module.exports = {
    focus(e) {
        var input = this.getEl('input');
        if(e.target != input) {
            input.focus();
        }
    },
    grow() {
        this.el.classList.add('large');
        this.getEl('input').value = '';
    },
    shrink() {
        this.el.classList.remove('large');
    }
}
});
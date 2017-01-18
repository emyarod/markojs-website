$_mod.def("/markojs-website$1.0.0/components/site-header/widget", function(require, exports, module, __filename, __dirname) { var Headspace = require('/headspace$0.1.1/dist/headspace'/*'headspace'*/);
var classNames = {
    base: 'headspace',
    fixed: 'headspace--fixed',
    hidden: 'headspace--hidden'
};

module.exports = {
    onMount() {
        this.headspace = new Headspace(this.el, {
            showAtBottom: false,
            classNames: classNames
        });
    },
    save() {
        this.isHidden = this.el.classList.contains(classNames.hidden);
    },
    reset() {
        var header = this;
        header.headspace.debounce(function() {
            setTimeout(function() {
                if(header.isHidden) {
                    header.el.classList.add(classNames.hidden);
                } else {
                    header.el.classList.remove(classNames.hidden);
                }
            });
        });
    }
}
});
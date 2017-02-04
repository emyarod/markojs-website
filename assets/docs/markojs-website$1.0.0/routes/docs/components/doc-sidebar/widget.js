$_mod.def("/markojs-website$1.0.0/routes/docs/components/doc-sidebar/widget", function(require, exports, module, __filename, __dirname) { var getWidgetForEl = require('/marko$4.0.0-rc.12/widgets/index-browser'/*'marko/widgets'*/).getWidgetForEl;
var forEach = [].forEach;

module.exports = {
    onMount() {
        var header = getWidgetForEl(document.querySelector('.site-header'));
        forEach.call(this.el.querySelectorAll('a[href^=\\#]'), (a) => {
            this.subscribeTo(a).on('click', () => {
                header.hide();
                header.pause();
                header.resume();
            });
        });
        this.subscribeTo(this.el.querySelector('a.selected')).on('click', (e) => {
            window.scrollTo(0,0);
            header.reset();
            e.preventDefault();
        });
        this.subscribeTo(header).on('reset', () => {
            this.el.classList.remove('no-header');
            this.el.classList.remove('fixed');
            setTimeout(() => this.el.classList.remove('transition'), 300);
        });
        this.subscribeTo(header).on('fix', () => {
            this.el.classList.remove('no-header');
            this.el.classList.add('fixed');
            setTimeout(() => this.el.classList.add('transition'), 300);
        });
        this.subscribeTo(header).on('hide', () => {
            this.el.classList.add('no-header');
            this.el.classList.add('fixed');
            setTimeout(() => this.el.classList.add('transition'), 300);
        });
    }
}
});
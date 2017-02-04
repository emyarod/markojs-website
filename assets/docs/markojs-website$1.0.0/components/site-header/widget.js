$_mod.def("/markojs-website$1.0.0/components/site-header/widget", function(require, exports, module, __filename, __dirname) { var classNames = {
    base: 'headspace',
    fixed: 'headspace--fixed',
    hidden: 'headspace--hidden'
};
var debounce = (cb) => window.requestAnimationFrame(cb);
var tolerance = 4;

module.exports = {
    onMount() {
        var scrollLast = window.pageYOffset;
        var startOffset = this.el.offsetHeight;

        var handleScroll = () => {
            var scrollCurrent = window.pageYOffset;

            if (scrollCurrent <= 0) {
                this.reset()
            } else if (!this.paused && scrollCurrent > startOffset && Math.abs(scrollCurrent - scrollLast) >= tolerance) {
                scrollCurrent > scrollLast ? this.hide() : this.fix();
            }

            scrollLast = scrollCurrent;
        };

        window.addEventListener('scroll', handleScroll);
    },
    reset() {
        this.removeClass(classNames.fixed);
        this.removeClass(classNames.hidden);
        this.emit('show');
    },
    fix() {
        this.addClass(classNames.fixed);
        this.removeClass(classNames.hidden);
        this.emit('show');
    },
    hide() {
        this.addClass(classNames.hidden);
        this.emit('hide');
    },
    addClass(cls) {
        this.el.classList.add(cls);
    },
    removeClass(cls) {
        this.el.classList.remove(cls);
    },
    pause() {
        this.paused = true;
    },
    resume() {
        debounce(() => this.paused = false);
    }
}
});
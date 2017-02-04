$_mod.def("/markojs-website$1.0.0/components/code-block-marko/widget", function(require, exports, module, __filename, __dirname) { var getWidgetForEl = require('/marko$4.0.0-rc.12/widgets/index-browser'/*'marko/widgets'*/).getWidgetForEl;

module.exports = {
    changeSyntax: function() {
        var header = getWidgetForEl(document.querySelector('.site-header'));
        var beforeScroll = document.body.scrollTop;
        var beforePosition = this.el.offsetTop;

        header.pause();

        if(localStorage.syntax === 'concise') {
            localStorage.syntax = 'html';
            document.body.classList.remove('concise');
        } else {
            localStorage.syntax = 'concise';
            document.body.classList.add('concise');
        }

        var afterPosition = this.el.offsetTop;
        var afterScroll = beforeScroll - beforePosition + afterPosition;

        document.body.scrollTop = afterScroll;

        header.resume();
    }
}
});
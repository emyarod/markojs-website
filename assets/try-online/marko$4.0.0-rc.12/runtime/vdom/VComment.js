$_mod.def("/marko$4.0.0-rc.12/runtime/vdom/VComment", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.0.0-rc.12/runtime/vdom/VNode'/*'./VNode'*/);
var inherit = require('/raptor-util$3.1.0/inherit'/*'raptor-util/inherit'*/);

function VComment(value) {
    this.$__VNode(-1 /* no children */);
    this.nodeValue = value;
}

VComment.prototype = {
    nodeType: 8,

    actualize: function(doc) {
        return doc.createComment(this.nodeValue);
    },

    $__cloneNode: function() {
        return new VComment(this.nodeValue);
    }
};

inherit(VComment, VNode);

module.exports = VComment;

});
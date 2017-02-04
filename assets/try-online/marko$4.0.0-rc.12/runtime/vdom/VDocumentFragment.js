$_mod.def("/marko$4.0.0-rc.12/runtime/vdom/VDocumentFragment", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.0.0-rc.12/runtime/vdom/VNode'/*'./VNode'*/);
var inherit = require('/raptor-util$3.1.0/inherit'/*'raptor-util/inherit'*/);
var extend = require('/raptor-util$3.1.0/extend'/*'raptor-util/extend'*/);

function VDocumentFragmentClone(other) {
    extend(this, other);
    this.$__parentNode = undefined;
    this.$__nextSibling = undefined;
}

function VDocumentFragment(documentFragment) {
    this.$__VNode(null /* childCount */);
    this.namespaceURI = undefined;
}

VDocumentFragment.prototype = {
    nodeType: 11,

    $__DocumentFragment: true,

    $__nsAware: true,

    $__cloneNode: function() {
        return new VDocumentFragmentClone(this);
    },

    actualize: function(doc) {
        var docFragment = doc.createDocumentFragment();

        var curChild = this.firstChild;

        while(curChild) {
            docFragment.appendChild(curChild.actualize(doc));
            curChild = curChild.nextSibling;
        }

        return docFragment;
    }
};

inherit(VDocumentFragment, VNode);

VDocumentFragmentClone.prototype = VDocumentFragment.prototype;

module.exports = VDocumentFragment;

});
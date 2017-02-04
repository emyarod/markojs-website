$_mod.def("/marko$4.0.0-rc.12/compiler/taglib-loader/handleAttributes", function(require, exports, module, __filename, __dirname) { var ok = require('/assert$1.3.0/assert'/*'assert'*/).ok;
var forEachEntry = require('/raptor-util$3.1.0/forEachEntry'/*'raptor-util/forEachEntry'*/);
var attributeLoader = require('/marko$4.0.0-rc.12/compiler/taglib-loader/loader-attribute'/*'./loader-attribute'*/);

module.exports = function handleAttributes(value, parent, dependencyChain) {
    ok(parent);
    ok(dependencyChain);

    forEachEntry(value, (attrName, attrProps) => {
        var attr = attributeLoader.loadAttribute(
            attrName,
            attrProps,
            dependencyChain.append('@' + attrName));

        parent.addAttribute(attr);
    });
};
});
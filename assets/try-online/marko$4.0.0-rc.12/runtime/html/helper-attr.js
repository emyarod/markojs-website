$_mod.def("/marko$4.0.0-rc.12/runtime/html/helper-attr", function(require, exports, module, __filename, __dirname) { var warp10 = require('/warp10$1.3.3/src/index'/*'warp10'*/);

var escape = require('/marko$4.0.0-rc.12/runtime/html/escape'/*'./escape'*/);
var escapeString = escape.escapeString;
var escapeXmlAttr = escape.escapeXmlAttr;

var stringifiedAttrTest = /[&\'\n]/;
var stringifiedAttrReplace = /[&\'\n]/g;

function attr(name, value, shouldEscape) {
    if (typeof value === 'string') {
        return ' ' + name + '="' + (shouldEscape !== false ? escapeXmlAttr(value) : value) + '"';
    } else if (value === true) {
        return ' ' + name;
    } else if (value == null || value === false) {
        return '';
    } else if (typeof value === 'object') {
        if (name.substring(0, 6) === 'data-_') {
            value = warp10.stringify(value);
        } else {
            value = JSON.stringify(value);
        }
        return ' ' + name + "='" + escapeString(value, stringifiedAttrTest, stringifiedAttrReplace) + "'";
    } else {
        return ' ' + name + '=' + value; // number (doesn't need quotes)
    }
}

module.exports = attr;
});
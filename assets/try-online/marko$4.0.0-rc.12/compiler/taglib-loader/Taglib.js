$_mod.def("/marko$4.0.0-rc.12/compiler/taglib-loader/Taglib", function(require, exports, module, __filename, __dirname) { 'use strict';
var forEachEntry = require('/raptor-util$3.1.0/forEachEntry'/*'raptor-util/forEachEntry'*/);
var ok = require('/assert$1.3.0/assert'/*'assert'*/).ok;
var taglibLoader;

function handleImport(taglib, importedTaglib) {
    var importsLookup = taglib.importsLookup || (taglib.importsLookup = {});
    if (importsLookup.hasOwnProperty(importedTaglib.path)) {
        return;
    }

    importsLookup[importedTaglib.path] = importedTaglib;

    if (!taglib.imports) {
        taglib.imports = [];
    }

    taglib.imports.push(importedTaglib);

    if (importedTaglib.imports) {
        importedTaglib.imports.forEach(function(nestedImportedTaglib) {
            handleImport(taglib, nestedImportedTaglib);
        });
    }
}

class Taglib {
    constructor(filePath) {
        ok(filePath, '"filePath" expected');
        this.filePath = this.path /* deprecated */ = this.id = filePath;
        this.dirname = null;
        this.tags = {};
        this.textTransformers = [];
        this.transformers = [];
        this.attributes = {};
        this.patternAttributes = [];
        this.inputFilesLookup = {};
        this.imports = null;
        this.importsLookup = null;
    }

    addAttribute(attribute) {
        attribute.filePath = this.filePath;

        if (attribute.pattern) {
            this.patternAttributes.push(attribute);
        } else if (attribute.name) {
            this.attributes[attribute.name] = attribute;
        } else {
            throw new Error('Invalid attribute: ' + require('/util$0.10.3/util'/*'util'*/).inspect(attribute));
        }
    }
    getAttribute(name) {
        var attribute = this.attributes[name];
        if (!attribute) {
            for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
                var patternAttribute = this.patternAttributes[i];
                if (patternAttribute.pattern.test(name)) {
                    attribute = patternAttribute;
                }
            }
        }
        return attribute;
    }
    addTag(tag) {
        ok(arguments.length === 1, 'Invalid args');
        if (!tag.name) {
            throw new Error('"tag.name" is required: ' + JSON.stringify(tag));
        }
        this.tags[tag.name] = tag;
        tag.taglibId = this.id || this.path;
    }
    addTextTransformer(transformer) {
        this.textTransformers.push(transformer);
    }
    addTransformer(transformer) {
        this.transformers.push(transformer);
    }
    forEachTag(callback, thisObj) {
        forEachEntry(this.tags, function (key, tag) {
            callback.call(thisObj, tag);
        }, this);
    }

    addImport(path) {
        var importedTaglib = taglibLoader.load(path);
        handleImport(this, importedTaglib);
    }

    toJSON() {
        return {
            path: this.path,
            tags: this.tags,
            textTransformers: this.textTransformers,
            attributes: this.attributes,
            patternAttributes: this.patternAttributes,
            imports: this.imports
        };
    }
}

module.exports = Taglib;

taglibLoader = require('/marko$4.0.0-rc.12/compiler/taglib-loader/index'/*'./'*/);
});
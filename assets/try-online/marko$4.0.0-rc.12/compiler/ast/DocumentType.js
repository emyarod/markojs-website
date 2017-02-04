$_mod.def("/marko$4.0.0-rc.12/compiler/ast/DocumentType", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'./Node'*/);

class DocumentType extends Node {
    constructor(def) {
        super('DocumentType');
        this.documentType = def.documentType;
    }

    generateHTMLCode(codegen) {
        var builder = codegen.builder;

        return [
            builder.htmlLiteral('<!'),
            builder.html(codegen.generateCode(this.documentType)),
            builder.htmlLiteral('>')
        ];
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = DocumentType;
});
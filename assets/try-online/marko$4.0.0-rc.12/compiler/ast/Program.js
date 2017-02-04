$_mod.def("/marko$4.0.0-rc.12/compiler/ast/Program", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'./Node'*/);

class Program extends Node {
    constructor(def) {
        super('Program');
        this.body = def.body;
    }

    generateCode(codegen) {
        this.body = codegen.generateCode(this.body);
        return this;
    }

    writeCode(writer) {
        writer.writeStatements(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Program;
});
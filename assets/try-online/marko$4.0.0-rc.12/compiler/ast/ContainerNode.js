$_mod.def("/marko$4.0.0-rc.12/compiler/ast/ContainerNode", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('/marko$4.0.0-rc.12/compiler/ast/Node'/*'./Node'*/);

class ContainerNode extends Node {
    constructor(def) {
        super('ContainerNode');
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        return codegen.genereateCode(this.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = ContainerNode;
});
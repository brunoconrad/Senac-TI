"use strict";
exports.__esModule = true;
var zoo = /** @class */ (function () {
    function zoo(end, list) {
        this.endereco = end;
        this.listaDeAnimais = list;
    }
    zoo.prototype.mostrarEndereco = function () {
        return this.endereco;
    };
    zoo.prototype.mostrarListaAnimais = function () {
        return this.listaDeAnimais;
    };
    return zoo;
}());
exports.zoo = zoo;

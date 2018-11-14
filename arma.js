"use strict";
exports.__esModule = true;
var arma = /** @class */ (function () {
    function arma(projeteis, capacidade) {
        this.capacidade = capacidade;
        this.projeteisNoPente = projeteis;
    }
    arma.prototype.atirar = function (N) {
        if (N === void 0) { N = 1; }
        if (this.projeteisNoPente == 0) {
            console.log('Não tem munição');
        }
        else {
            this.projeteisNoPente -= N; 
            for (var x = 1; x <= N; x++) {
                console.log('Pistola diz: paaa');
            }
            if (this.informarBalas() > 0) {
                console.log('Você tem ainda ' + this.informarBalas() + ' munições');
            }
            else {
                console.log('Não tem munição');
            }
        }
    };
    arma.prototype.recarregar = function () {
        this.projeteisNoPente = this.capacidade;
    };
    arma.prototype.informarBalas = function () {
        return this.projeteisNoPente;
    };
    return arma;
}());
exports.arma = arma;

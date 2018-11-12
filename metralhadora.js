"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Arma_1 = require("./Arma");
var metralhadora = /** @class */ (function (_super) {
    __extends(metralhadora, _super);
    function metralhadora(projeteis, capacidade, TirosPorSegundos) {
        var _this = _super.call(this, capacidade, projeteis) || this;
        _this.TirosPorSegundos = TirosPorSegundos;
        return _this;
    }
    metralhadora.prototype.atirar = function () {
        if (this.projeteisNoPente == 0) {
            console.log('Não tem munição');
        }
        else {
            this.projeteisNoPente -= this.TirosPorSegundos;
            for (var x = 0; x <= this.TirosPorSegundos; x++) {
                console.log('Fuzil diz: pooowwww');
            }
            if (this.informarBalas() > 0) {
                console.log('Você tem ainda ' + this.informarBalas() + ' munições');
            }
            else {
                console.log('Não tem munição');
            }
        }
    };
    return metralhadora;
}(Arma_1.arma));
exports.metralhadora = metralhadora;

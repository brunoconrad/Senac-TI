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
var pessoa_1 = require("./pessoa");
var operador = /** @class */ (function (_super) {
    __extends(operador, _super);
    function operador() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.senhaOperador = 'operador';
        _this.cpfOperador = 123;
        return _this;
    }
    operador.prototype.logar = function () {
        if (this.cpf == this.cpfOperador && this.senha == this.senhaOperador) {
            console.log('logado Operador');
        }
        else {
            console.log('errrooooooouuuuu, Operador');
        }
    };
    return operador;
}(pessoa_1.pessoa));
exports.operador = operador;

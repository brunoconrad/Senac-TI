"use strict"; 
exports.__esModule = true;
var animal = /** @class */ (function () {
    //constructor da minha classe
    //Para que animal seja criada
    //quero que defina quantidade de dentes
    // e olhos
    function animal(qtdDentes, qtdDeOlhos, nomeAnimal) {
        this.quantidadeDeDentes = qtdDentes;
        this.quantidadeDeOlhos = qtdDeOlhos;
        this.nome = nomeAnimal;
    }
    animal.prototype.definirDentes = function () {
        return this.quantidadeDeDentes;
    };
    animal.prototype.definirOlhos = function () {
        return this.quantidadeDeOlhos;
    };
    animal.prototype.nomeAnimal = function () {
        return this.nome;
    };
    return animal;
}());
exports.animal = animal;

"use strict";
exports.__esModule = true;
var Arma_1 = require("./Arma");
var metralhadora_1 = require("./metralhadora");
var fuzil = new metralhadora_1.metralhadora(10, 10, 5);
fuzil.atirar();
var pistola = new Arma_1.arma(10, 10);
pistola.atirar(3);

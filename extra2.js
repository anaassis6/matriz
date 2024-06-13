/*Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
var valores = new Array();
var media = 0;
var z = 0;
for (var x = 1; x <= 10; x++) {
    valores[x] = parseInt(teclado("Digite o valor ".concat(x, ": ")));
    media += valores[x];
}
media /= 10;
for (var y = 1; y <= 10; y++) {
    if (valores[y] == media) {
        console.log("O valor ".concat(valores[y], " no \u00EDndice ").concat(y, " \u00E9 igual a m\u00E9dia dos valores"));
        console.log("A m\u00E9dia dos valores \u00E9 ".concat(media));
    }
}

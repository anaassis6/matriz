/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno.
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
var notas = new Array();
var media = 0;
for (var x = 1; x <= 5; x++) {
    notas[x] = parseFloat(teclado("Nota ".concat(x, ": ")));
    media += notas[x];
}
media /= 5;
console.log("A m\u00E9dia do aluno \u00E9 ".concat(media));

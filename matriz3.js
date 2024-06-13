/* Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas
Nome: Ana Luiza de Assis*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var coluna = 2;
var linha = 4;
for (var z = 0; z < linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);

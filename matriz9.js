/*9- Crie uma matriz 6x6 com entrada manual. Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
var matriz = [];
var linha = 6;
var coluna = 6;
var soma = 0;
for (var x = 0; x < linha; x++) {
    matriz[x] = [];
    for (var y = 0; y < coluna; y++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero do \u00EDndice [".concat(x, ", ").concat(y, "] da matriz: ")));
        matriz[x][y] = numero;
        if (y % 2 == 0) {
            soma += matriz[x][y];
        }
    }
}
console.log(matriz);
console.log("A soma do n\u00FAmeros inseridos em colunas pares \u00E9 igual a ".concat(soma));

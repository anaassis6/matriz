/*5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 3;
var coluna = 3;
for (var x = 0; x < linha; x++) {
    matriz[x] = [];
    for (var y = 0; y < coluna; y++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero do \u00EDndice [".concat(x, ", ").concat(y, "] da matriz: ")));
        matriz[x][y] = numero;
    }
}
console.log(matriz);

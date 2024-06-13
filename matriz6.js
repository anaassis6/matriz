/*6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/
var teclado = require("prompt-sync")();
var matriz = [];
var linha = 3;
var coluna = 3;
for (var x = 0; x < linha; x++) {
    matriz[x] = [];
    for (var y = 0; y < coluna; y++) {
        var numero = parseFloat(teclado("Digite o n\u00FAmero do \u00EDndice [".concat(x, ", ").concat(y, "] da matriz: ")));
        if (numero >= 0 && numero <= 9) {
            matriz[x][y] = numero;
        }
        else {
            console.log("O n\u00FAmero inserido deve ser de 0 a 9 para ser armazenado no \u00EDndice, insira outro n\u00FAmero");
            y--;
        }
    }
}
console.log(matriz);

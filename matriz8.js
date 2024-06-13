/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.
Nome: Ana Luiza de Assis*/
var matriz = [];
var linha = 0;
var coluna = 0;
var maior = 0;
for (var x = 0; x < 4; x++) {
    matriz[x] = [];
    for (var y = 0; y < 4; y++) {
        var numero = Math.floor(Math.random() * 21);
        matriz[x][y] = numero;
        if (matriz[x][y] >= maior) {
            maior = matriz[x][y];
            coluna = y;
            linha = x;
        }
    }
}
console.log(matriz);
console.log("O maior n\u00FAmero armazenado \u00E9 ".concat(maior, ", no \u00EDndice [").concat(linha, ",").concat(coluna, "]"));

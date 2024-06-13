/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/
var matriz = [];
var linha = 3;
var coluna = 3;
for (var x = 0; x < linha; x++) {
    matriz[x] = [];
    for (var y = 0; y < coluna; y++) {
        var numero = Math.floor(Math.random() * 10);
        matriz[x][y] = numero;
    }
}
console.log(matriz);

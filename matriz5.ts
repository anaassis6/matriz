/*5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/

const teclado = require (`Prompt-sync`)();
let matriz: number [][] = [];
let linha = 3;
let coluna = 3;

for(let x = 0; x < linha; x++){
    matriz[x] = [];

    for(let y = 0; y < coluna; y++){
        let numero: number = parseFloat(teclado(`Digite o número do índice [${x}, ${y}] da matriz: `));
        matriz[x][y] = numero;
    }
}
console.log(matriz);
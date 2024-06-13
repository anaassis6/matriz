/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/

let matriz: number [][] = [];
let linha = 3;
let coluna = 3;

for(let x = 0; x < linha; x++){
    matriz[x] = [];

    for(let y = 0; y < coluna; y++){
        let numero: number = Math.floor(Math.random() * 10);
        matriz[x][y] = numero;
    }
}
console.log(matriz);

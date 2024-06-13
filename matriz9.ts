/*9- Crie uma matriz 6x6 com entrada manual. Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.
Nome: Ana Luiza de Assis*/
const teclado = require (`prompt-sync`)();

let matriz: number [][] = [];
let linha = 6;
let coluna = 6;
let soma = 0; 

for(let x = 0; x < linha; x++){
    matriz[x] = [];

    for(let y = 0; y < coluna; y++){
        let numero: number = parseFloat(teclado(`Digite o número do índice [${x}, ${y}] da matriz: `));
        matriz[x][y] = numero;
        if(y % 2 == 0){
           soma += matriz[x][y];  
        }
    }
}
console.log(matriz);
console.log(`A soma do números inseridos em colunas pares é igual a ${soma}`);
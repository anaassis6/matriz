/*6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.
Nome: Ana Luiza de Assis*/

const teclado = require (`prompt-sync`)();

let matriz: number [][] = [];
let linha = 3;
let coluna = 3;

for(let x = 0; x < linha; x++){
    matriz[x] = [];

    for(let y = 0; y < coluna; y++){
        let numero: number = parseFloat(teclado(`Digite o número do índice [${x}, ${y}] da matriz: `));
        if(numero >= 0 && numero <= 9){
            matriz[x][y] = numero; 
        }
        else{
            console.log(`O número inserido deve ser de 0 a 9 para ser armazenado no índice, insira outro número`);
            y--;
        }
    }
}
console.log(matriz);
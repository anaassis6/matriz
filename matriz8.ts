/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.
Nome: Ana Luiza de Assis*/
let matriz: number [][] = [];
let linha = 0;
let coluna = 0;
let maior = 0;

for(let x = 0; x < 4; x++){
    matriz[x] = [];

    for(let y = 0; y < 4; y++){
        let numero: number = Math.floor(Math.random() * 21);
        matriz[x][y] = numero; 
        if(matriz[x][y] >= maior){
            maior = matriz[x][y];
            coluna = y;
            linha = x;
        }
    }
}
console.log(matriz);
console.log(`O maior número armazenado é ${maior}, no índice [${linha}, ${coluna}]`);


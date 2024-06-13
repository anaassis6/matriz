/* Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas
Nome: Ana Luiza de Assis*/

console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: number[][] = [];
let coluna = 2;
let linha = 4;

for(let z = 0; z < linha; z++){
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++){
        let numero: number = parseFloat(teclado (`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
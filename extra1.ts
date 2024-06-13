/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. 
Nome: Ana Luiza de Assis*/
const teclado = require (`prompt-sync`)();
let notas: number [] = new Array ();
let media = 0;
for(let x = 1; x <= 5; x++){
    notas[x] = parseFloat(teclado(`Nota ${x}: `));
    media += notas[x];
}
media /= 5;
console.log(`A média do aluno é ${media}`);

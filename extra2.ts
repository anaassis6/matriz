/*Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Ana Luiza de Assis*/
const teclado = require (`prompt-sync`)();
let valores: number [] = new Array ();
let media = 0;
let z = 0;
for(let x = 1; x <= 10; x++){
    valores[x] = parseInt(teclado(`Digite o valor ${x}: `));
    media += valores[x];
}
media /= 10;
for(let y = 1; y <= 10; y++){
    if(valores[y] == media){
        console.log(`O valor ${valores[y]} no índice ${y} é igual a média dos valores`);  
        console.log(`A média dos valores é ${media}`);
    }
}

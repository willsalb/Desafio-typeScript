"use strict";
//Definindo o tipo de retorno de uma função
/*function SomarValoresNumericos(numero1: number, numero2: number): number {//quando criar uma função tem como definir o valor de seus parametros e também definir o tipo que vair sair.
    return numero1 + numero2;
}

console.log(SomarValoresNumericos(2, 3));*/
//Como usar o tipo "void" em funções
/*function printaValoresNumericos(numero1: number, numero2:number): void { //"void" é a ausencia de um retorno, so é utilizado quando quer dizer explicidamente que a função rode, mas não quer que devolva nada.
    console.log(numero1 + numero2) //"console.log" é uma funçãi que não retorna nada.
}*/
//Incluindo callback em funções
//"callback" é uma função que é passada como parametro, ela vai rodar quando uma certa ação ocorrer
//Notação de um callback = callback: (numero: number) => number)
function SomarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
    //o callback(aoQuadrado) vai receber resultado que é o somatorio do numero1+numero2 e vai ter que devolver ele aoQuadrado
    //pode passar diferentes funções para realizar um passo a mais.
}
//obedece a regra do callback tendo um numero como parametro e devolve um number.
function aoQuadrado(numero) {
    return numero * numero;
}
function dividePorEleMesmo(numero) {
    return numero / numero;
}
console.log(SomarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(SomarValoresNumericosETratar(1, 3, dividePorEleMesmo));

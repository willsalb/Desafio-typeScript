"use strict";
//Variável any, que é um tipo que pode receber qualquer tipo.
let valorAny;
valorAny = 3;
valorAny = 'Ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testinho';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('ME DE', ', O CERULA!');

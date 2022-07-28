"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString(); //Garante que retorne apenas string.
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 2));
console.log(somarValores('ME DE', ', O CERULA'));
console.log(somarValores('Esse númeor é: ', 20));

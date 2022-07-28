//Definição de tipos de variáveis personalizados
type inpute = number | string //pode criar tipos e dizer que esse tipo é igual a outros tipos, um tipo que combina tipo.

function somarValores(input1: inpute, input2: inpute) {
    if(typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString(); //Garante que retorne apenas string.
    } else {
        return input1 + input2;
    }
}

console.log(somarValores(1, 2));
console.log(somarValores('ME DE', ', O CERULA'));
console.log(somarValores('Esse númeor é: ', 20));

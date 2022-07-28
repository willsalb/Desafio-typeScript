//Variável any, que é um tipo que pode receber qualquer tipo.
let valorAny: any;
valorAny = 3
valorAny = 'Ola'
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny
let valorString2: string = 'testinho';
valorString2 = valorAny

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2);
somarString('ME DE', ', O CERULA!');
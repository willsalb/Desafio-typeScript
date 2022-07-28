"use strict";
//any voltou e unknown
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
//quando for alocar o valor para outra propriedade tem que fazer uma validação, para garantir que o que tem dentro do "unknown" é do tipo que a propriedade espera receber.
//essa é a diferença dele pro any, pode alocar um any em alguem que não deveria receber, mas com o unknown pode pegar um objeto que é desconhecido dizer que é um unknown e enquanto está trabalhando com o objeto vai fazendo essas validações necessarias, para alocar o valor dele da maneira correta nas variaveis.
//isso pode ocorrer quando vier um objeto que por alguma razão o tipo pode ficar variando e você não sabe o que está vindo pra você e tem que fazer um tratamento(validação).
let unknownValor;
unknownValor = 3;
unknownValor = 'oi';
unknownValor = true;
unknownValor = 'vamo sim!';
let stringTeste2 = 'VAMO!';
//stringTeste2 = unknownValor;
let numero = 3;
if (typeof unknownValor === 'number') {
    numero = unknownValor;
}
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
//Tipo never e o comando throw
//o throw joga um erro, uma interrupção no script. Se tivesse algum codigo depois do throw eles não iriam rodar porque o throw rodou, o throw rodou acabou a função.
//never é um tipo referente ao codigo que nunca é finalizado.
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Deu erro', 500);

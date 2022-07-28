"use strict";
/*let buttonTeste = document.getElementById('button');

//Exemplo noImplictAny
function somarImplicito(parametro1, parametro2) {
    return parametro1 + parametro2;
}

buttonTeste?.addEventListener('click', () => {
    console.log('Funcionou');
})*/
const Will = {
    nome: 'will',
    idade: 20,
    endereco: 'Rua tal'
};
class Mamifero {
    constructor(nome, quantidadeDePatas, temPelos) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }
    dizerNome() {
        console.log('Meu nome é ', this.nome);
    }
}
const cachorro = new Mamifero('Meg', 4, true);
cachorro.dizerNome();

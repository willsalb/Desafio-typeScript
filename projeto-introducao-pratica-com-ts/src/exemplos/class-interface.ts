/*let buttonTeste = document.getElementById('button');

//Exemplo noImplictAny
function somarImplicito(parametro1, parametro2) {
    return parametro1 + parametro2;
}

buttonTeste?.addEventListener('click', () => {
    console.log('Funcionou');
})*/











//classes e interfaces
interface Humano {
    nome: string,
    idade: number,
    endereco: string
}

const Will: Humano = {
    nome: 'will',
    idade: 20,
    endereco: 'Rua tal'
}

class Mamifero {
    public quantidadeDePatas: number;
    public temPelos: boolean;
    public nome: string;

    constructor(nome: string, quantidadeDePatas: number, temPelos: boolean) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }

    public dizerNome() {
        console.log('Meu nome é ', this.nome);
    }
}

const cachorro = new Mamifero('Meg', 4, true)
cachorro.dizerNome();
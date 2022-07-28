//Desafio 2

enum Profissao2 {
    Atriz,
    Padeiro
};

//Usando interface:
interface Pessoa2 {
    nome: string,
    idade: number,
    Profissao2?: Profissao2
};

//Usando type:
type Humano2 = {
    nome: string,
    idade: number,
    Profissao2: Profissao2
}

const Maria: Humano2 = {
    nome: "maria",
    idade: 29,
    Profissao2: Profissao2.Atriz
};

const Roberto: Humano2 = {
    nome: "roberto",
    idade: 19,
    Profissao2: Profissao2.Padeiro
};

let pessoa3: Humano2 = {
    nome: "laura",
    idade: 32,
    Profissao2: Profissao2.Atriz
};

let pessoa4: Humano2 = {
    nome: "carlos",
    idade: 19,
    Profissao2: Profissao2.Padeiro
}
"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 22,
    profissao: 'desenvolvedora'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: "desenvolvedora"
};
//Grupo de constantes.
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
const pedro = {
    nome: 'Pedro',
    idade: 18,
    profissao: Profissao.Professor,
    materias: ['Economia', 'introdução a ADM']
};
const lucas = {
    nome: 'Lucas',
    idade: 20,
    materias: ['Arquivamento', 'Introdução a Biblioteconomia']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(lucas.materias);

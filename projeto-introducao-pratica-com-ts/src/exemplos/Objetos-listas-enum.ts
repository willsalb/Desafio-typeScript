const pessoa = {
    nome: 'Mariana',
    idade: 22,
    profissao: 'desenvolvedora'
}


const paula : {nome: string, idade: number, profissao: string} = {
    nome: 'paula',
    idade: 25,
    profissao: "desenvolvedora"
}


//Grupo de constantes.
enum Profissao {
    Professor,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[] //Listas em TS recebe segue essa anotação.
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const pedro: Estudante = {
    nome: 'Pedro',
    idade: 18,
    profissao: Profissao.Professor,
    materias: ['Economia', 'introdução a ADM']
}

const lucas: Estudante = {
    nome: 'Lucas',
    idade: 20,
    materias: ['Arquivamento', 'Introdução a Biblioteconomia']
}

function listar(lista: string[]) {
    for (const item of lista) {  
        console.log('- ', item);
    }
}

listar(lucas.materias)
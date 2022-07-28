//Não precisou rodar esse app.ts nenhuma vez para encontrar erros.
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devePrintar =  true;//O ts consegue inferir o valor da proriedade na priemeira inicialização, também mantendo o tipo dessa propriedade conforme for utilizando.
let frase = 'string';//Como também pode definir explicidamente o tipo da variavel e depois colocar o seu valor.
frase = "O valor é: "

if(button) {
    button.addEventListener('click', () => {
        if(input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase))
        }
    })
}
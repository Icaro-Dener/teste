var corverde = "\x1b[32m"
var corazul = "\x1b[34m"
 console.log(corverde, "-eu sou verde");
function d20() {
    return Math.floor(Math.random() * 20) + 1
}
var dado1 = d20()
//  var dado2 = d20()
//console.log("Primeiro dado", dado1)
//  console.log("Segundo dado", dado2)
//  console.log("Soma dos dois", dado1 + dado2)
// if(dado1 > 10) {
// console.log("parabens seu retadado! seu resultado foi",dado1 )
//}

console.log(corazul, "-Olá filho duma puta")
// setTimeout(function () {
//     console.log("por acaso você é viado?")
// }, 2000);

const prompt = require('prompt-sync')()
// const name = prompt("-Este é o meu teste de javascript, insira seu nome... ")
// console.log(`${name}! que nome bonito!`)

// function perguntaIdade() {
//     const idade = prompt(`E a sua idade? `)
//     const idadeNumber = parseInt(idade)
//     if (isNaN(idadeNumber) || (idadeNumber < 0)) {
//         console.log("-Insira um numero positivo ")
//         perguntaIdade()
//         return
//     }
//     if (idade < 18) {
//         console.log("-Você é menor de idade!")
//         close
//     } else {
//         console.log("-Seja bem vindo!")
//     }
// }
// perguntaIdade()
// function perguntaDirecao() {
//     const direcao = prompt("-Para que lado você quer ir? (esquerda, direita) ")
//     if (direcao.includes("-esquerda")) {
//         console.log("-Você foi pra esquerda!")
//         return
//     }
//     if (direcao.includes("direita")) {
//         console.log("-Você foi pra direita!")
//         console.log()
//         direita()
//         return
//     } else {
//         console.log("-Insira esquerda ou direita ")
//         perguntaDirecao()
//         return
//     }

// }
// perguntaDirecao()

function direita() {
    console.log("-Você se depara com um bixo!!")
    console.log()
    const decisao = prompt("-Você quer ataca-lo? ")
    if (decisao.includes("sim") || decisao.includes("atacar")) {
        matarBixo()
        return
    }
    if (decisao.includes("nao")) {
        console.log("-Você foi dilacerado")
        return
    } else {
        direita()
        return
    }
}
direita()
function matarBixo() {
    const d20p = prompt("-Role um d20! ")
    if (d20p.includes("d20")) {
        console.log("-Seu dado foi", dado1)
        if (dado1 > 10) {
            console.log("-Parabens você dilacerou o filho da puta")
        } else {
            console.log("-Você tenta porém erra e sofre um traumatismo ucraniano!")
        }
    } else {
        matarBixo()
        return
    }
}
detectPal()
// function detectPal() {  //ana, civic, bob, amoroma
//     const insirPal = prompt()
//     if (insirPal == (insirPal.split("").reverse().join(""))) {
//         console.log("isso eh um palindromo!")
//         return
//     } else {
//         console.log("isso nn eh um palindromo")
//         detectPal()
//         return
//     }
// }

// const promessa = new Promise((resolvido, rejeitado) => {
//     setTimeout(() => {
//         rejeitado("Dados perdidos seu otário.");
//     }, 3000);
// })

// promessa
// .then(resultado => {
//     console.log(resultado);
// })
// .catch((erro) => {
//     console.error(`Error: ${erro}`)
// })



// new Promise((resolve, reject) => {
//     resolve(10);
// })
// .then(numero => {
//     return numero * 2;
// })
// .then(numero => {
//     return numero + 5;
// })
// .then(numero => {
//     console.log(numero)
// })



//  const nome = prompt("digite seu nome");
//  const numero = Number(prompt("Digite sua idade"));
//  const promessa = new Promise((resolve, reject) => {
//      if (numero >= 21) {
//          setTimeout(() => {
//              resolve(`Olá ${nome}! Você pode entrar na festa.`)
//          }, 3000)
//      }
//      else {
//          setTimeout(() => {

//              reject(`Sai daqui ${nome}! tu é menor de idade.`)
//          }, 3000)
//      }
//  })
// promessa
//     .then((resolve) => {
//          console.log(resolve)
//     })
//      .catch((reject) => {
//          console.log(reject)
//     });



// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(resposta => resposta.json())
//     .then(dados => {
//         console.log(dados);
//     })
//     .catch(erro => {
//         console.error(`Erro: ${erro}`);
//     })



// const nomeDoUsuario = prompt("Qual o seu nome?");

// function saudar(nome) {
//     return new Promise(resolve => {
//         resolve(nome);
//     });
// }

// function exibirMensagem(nome) {
//     alert(`Olá, ${nome}!`);
// }
// saudar(nomeDoUsuario).then(nomeVindoDoArgumento => {
//     exibirMensagem(nomeVindoDoArgumento);
// });



// async function executarLogs() {
//     console.log("Início")
//     await new Promise(resolvida => {
//         setTimeout(() => {
//     console.log("Meio")
//     resolvida()
//     },2000);
// }) 
    
//     await new Promise(resolvida => {
//         setTimeout(() => {
//     console.log("Fim")
//     },2000);
// })
    
// }

// executarLogs();



const nome = prompt("Qual seu nome?");
const idade = Number(prompt("Qual sua idade?"));

function verificarIdade(nome, idade) {
    return new Promise((resolvida, rejeitada) => {
        idade >= 21? resolvida(`Olá, ${nome}! Você pode entrar na festa`)
        : rejeitada(`Você não pode entrar na festa`);
    });
    
}

async function exibirMensagem() {
    try {
        const resultado =await verificarIdade(nome, idade);
        alert(resultado);
    } catch (error) {
        console.error(error);
    }
}

exibirMensagem()
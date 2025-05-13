
//let numero = ["1", "2", "3","4", "5", "6", "7", "8", "9", "10"];
//let acumulador = 0;
//function contarPares (lista){
    
//    for (let i = 0; i < lista.length; i++){
 //       if(lista[i] % 2 === 0) {
 //           acumulador = acumulador + 1;
//        }
//    }
//return acumulador;

//}
//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(contarPares(arr));



//const usuario = {
//    nome: "Paulo",
//    idade: 18,
//    Profissão: "Desenvolvedor junior",
//    endereço: "Rua da facada",
//    numero: "333",
//    cidade: "Morte",
//}
//console.log(usuario);








//const pessoas = [
  //  pessoa1 = {
    //    nome: "Alex",
      //  idade: 29,
    //},
    //pessoa2 = {
    //    nome: "Yoshi",
    //    idade: 18,    
    //},
    //pessoa3 = {
    //    nome: "Mario",
    //    idade: 24,
    //},
//];

//for (let i = 0; i < pessoas.length; i++)
    // if(pessoas >= 21) {
    //     console.log(`${pessoas[i].nome}pode se casar pois tem ${pessoas.idade} anos de idade.`);
    // }
    // else {
    //     console.log(`${pessoas.nome}Não pode se casar pois tem ${pessoas.idade}anos de idade.`);
    // }



//     const numeros = [1,2,3,4,5,6,];
//     const pares = [];

//      for(let i = 0; i <numeros.length; i++){
//         if(numeros[i] % 2 === 0) {
//             pares.push(numeros[i]);
//         }
//      }
// console.log(pares);



// const numeros = [1,2,3,4,5,6];
// const pares = numeros.filter((numero) => {
//    if(numero % 2 === 0) {
//     return numero;
//    }
// });
// console.log(pares);



// const numeros = [1,2,3,4,5,6];
// const pares = numeros.filter(numero => numero % 2 === 0);
//     console.log(pares)



// const numeros = [1,2,3,4,5,6];
// numeros.forEach((numero) => {
//    console.log(numero);
// });



// let acumulador = 0;
// const numeros = [10, 20, 30];
// numeros.forEach(function(numero){
//     acumulador = acumulador + numero
// });
// console.log(acumulador)



// const pessoas = [
//   pessoa1 = {
//     nome: "Alex",
//     idade: 29
//   },
//   pessoa2 = {
//     nome:"Yoshi",
//     idade: 18
//   }
// ];
// const nomes = pessoas.map(pessoas => ){
  
// }



// const pontuacoes = [15, 20, 8, 12];
// const pontos = pontuacoes.map(pontos =>{return pontos +10})
// console.log(pontos)



// let novaPontuacao = []
// let pontuacoes = [15, 20, 8, 12];
//   pontuacoes.forEach(function(novaP){
//   novaPontuacao.push(novaP + 10)
 
// });
// console.log(novaPontuacao)



// const alunos = [
//  { nome: "Alex", nota: 4},
//  { nome: "Yoshi", nota: 9},
//  { nome: "Mario", nota: 7},
// ];
 
// const aprovados = alunos.filter(aluno => aluno.nota >=7);
//   console.log(aprovados);



// const numeros = [10, 20, 30];

// const somar = numeros.reduce((acumulador, numeros) =>{
//   return acumulador + numeros;
// }, 0);
//   console.log( somar)



const notas = [7, 8, 6, 9, 5];

const media = notas.reduce((acumulador, notas) => {
    return acumulador + notas;
})
  console.log(`Sua nota bostíl é ${media/5}`)
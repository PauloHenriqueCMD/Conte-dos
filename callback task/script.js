
//function verificaNumero (numero, executarCallBack) {
   
 
//    if (numero>=10){
//        executarCallBack("Número alto");
//}   
//    else {
//        executarCallBack("Número baixo");
//}


//}

//function mensagem (texto) {
//    console.log(`${texto}`)

//}
//verificaNumero(15, mensagem)


function boasVindas (nome, callback){
  return callback (nome);
}
function saudar (nome) {
console.log(`Olá ${nome}`);
}
boasVindas("Paulo", saudar);
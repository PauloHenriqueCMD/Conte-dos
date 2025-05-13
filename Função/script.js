 let palavra;
    
  let nome = (palavra) => {
  do {
    palavra = prompt("Digite uma palavra");
  } while (palavra !== "finalizar");
  alert(`Você digitou "${palavra}" E encerrou o programa`);
  
}
nome (palavra);
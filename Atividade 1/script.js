let nome = prompt("Digite seu nome:");
let idade = prompt("Qual sua idade?");
 


if (idade >=18) {
   let habilitado = confirm("Você é habilitado?"); 
    if (habilitado) {
    alert(`Tudo bem, ${nome}! Você pode dirigir.`);
   } else{
    alert(`Olá, ${nome}! Você não pode dirigir.`);
   }
}
else {
    alert(`Que pena, ${nome}! Você é menor de idade.`);
    alert(`E não possui habilitação.`);
}
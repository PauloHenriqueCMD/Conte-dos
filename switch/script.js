let numero = Number(prompt(`Digite um número:
     1 - Saque
     2 - Trasnferência
     3 - Saldo
     4 - Extrato
     `));
      

 switch (numero) {
    case 1:
      alert("Saque")
       break
    case 2:
      alert("Transferência")
      break
    case 3:
      alert("Saldo")
      break
    case 4:
      alert("Extrato")
      break
    default :
      alert("número inválido");
 }

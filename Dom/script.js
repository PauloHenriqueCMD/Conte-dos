//  let paragrafo = document.getElementById("paragrafo");
//  let nome = "visitante";
//  function saudar (nome) {
//     paragrafo.textContent =`Olá ${nome}!` 
// }
//  saudar(nome)



// const botao = document.querySelector ("button");
//     botao.addEventListener("click", evento => {
//        let nome = prompt("Digite seu nome"); 
//         alert(`Bem-vindo Mr. ${nome}!`);    
//     }); 



// const botao = document.querySelector ("button");
//     botao.addEventListener("keyup", evento => {
//       console.log(`tecla pressionada ${evento.key}`)   
// }); 


// let nome = document.querySelector("nome")
// const formulario = document.querySelector("form");
//     formulario.addEventListener(`submit`, e => {
//         e.preventDefault ();
//             alert(`Mensagem enviada ${nome}`)
       
//     });



// let nome = document.querySelector("#nome")
// const formulario = document.querySelector("form");
//      nome.addEventListener(`blur`, () => {
//         if (!nome.value) {
//             nome.style.borderColor ="red"
//         }

             
// });



// const botao = document.querySelector("button");

// botao.addEventListener(`click`, () => {
//     if ( botao.style.backgroundColor === `white`){
//         botao.style.backgroundColor = "blue";
//         document.body.style.backgroundColor = `white`;
// }
//     else {
//         botao.style.backgroundColor = "white";
//         document.body.style.backgroundColor = `blue`;
//     }
// })



const botoes = document.querySelectorAll("button");
    botoes.forEach(function(botao) {
        botao.addEventListener("click", (botoes) => {
            if (botoes.target.id === "maior") {
                alert(`Você é maior de idade!`);
            }
            else {
                alert(`Você é menor de idade!`);
            }
        });
        
    });


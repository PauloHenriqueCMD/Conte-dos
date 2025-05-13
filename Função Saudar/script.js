function aplicarDesconto(preço, desconto = 10){
    return preço - (preço * (desconto/100))
}

console.log(aplicarDesconto(150));
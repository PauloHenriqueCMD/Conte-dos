function executarCallback(numero1, numero2, outraFuncao) {
    outraFuncao(numero1, numero2);

executarCallback (2, 5, function(numero1, numero2) {
    console.log(numero1 + numero2);
}
}

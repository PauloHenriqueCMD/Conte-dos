let temperatura = prompt("Qual a temperatura do ambiente?");

if (temperatura >=36) {
    alert("Calor extremo.");
}
else if (temperatura >=25){
    alert("Clima quente.");
}
else if (temperatura >=15 ){
    alert("Clima agradável.");
}
else if (temperatura >=5 ){
    alert("Clima frio.")
}
else {
    alert("Frio intenso.");
}
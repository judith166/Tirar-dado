//Ejercicio 1 -> 
//Introducir una cadena. Separar carácter a carácter con un guión.

let texto = "cafe";
let splitTexto = texto.split("").join("-");

console.log(splitTexto);

//Ejercicio 2 -> 
//Introducir una cadena. Separar en dos mitades.
let primeraMitad = texto.substring(0,2);
let segundaMitad = texto.substring(2,4);

console.log(primeraMitad);
console.log(segundaMitad);

//Ejercicio 3 -> 
//Ejercicio de la tirada de un dado.

function tirarDado() {
    var imagenesDado = [
        "dado1.png", 
        "dado2.png", 
        "dado3.png", 
        "dado4.png", 
        "dado5.png", 
        "dado6.png"];

    
    var imgDado = document.getElementById("imgDado");
    var tiradaRandom = Math.floor(Math.random() * imagenesDado.length);
    var imgRandom = imagenesDado[tiradaRandom];

    imgDado.src = imgRandom;
}

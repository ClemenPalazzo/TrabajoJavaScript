let num = parseFloat(prompt("Por favor, ingresa un número:"));
let resultado = "";

if (num % 2 === 0) {
    resultado = "El " + num + " es divisible por 2.";
} else if (num % 3 === 0) {
    resultado = "El " + num + " es divisible por 3.";
} else if (num % 5 === 0) {
    resultado = "El " + num + " es divisible por 5.";
} else if (num % 7 === 0) {
    resultado = "El " + num + " es divisible por 7.";
} else {
    resultado = "El " + num + " no es divisible por 2, 3, 5, ni 7.";
}

document.write(resultado);

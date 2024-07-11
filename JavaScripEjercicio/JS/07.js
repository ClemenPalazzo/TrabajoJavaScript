let num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
let num3 = parseFloat(prompt("Por favor, ingresa el tercer número:"));

let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}

document.write("El " + mayor + " es el número más grande");

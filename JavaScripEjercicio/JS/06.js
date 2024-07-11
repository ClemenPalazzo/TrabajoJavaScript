let num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
let num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));

if (num1 > num2) {
    document.write("El " + num1 + " es el número más grande");
} else if (num2 > num1) {
    document.write("El " + num2 + " es el número más grande");
} else {
    document.write("Ambos números son iguales");
}
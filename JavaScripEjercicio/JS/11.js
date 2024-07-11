let num = parseFloat(prompt("Por favor, ingresa un número:"));
let divisibles = [];

if (num % 2 === 0) divisibles.push(2);
if (num % 3 === 0) divisibles.push(3);
if (num % 5 === 0) divisibles.push(5);
if (num % 7 === 0) divisibles.push(7);

if (divisibles.length > 0) {
    document.write("El " + num + " es divisible por " + divisibles.join(", ").replace(/,([^,]*)$/, " y$1") + ".");
} else {
    document.write("El " + num + " no es divisible por 2, 3, 5, ni 7.");
}

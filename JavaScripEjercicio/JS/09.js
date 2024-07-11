let frase = prompt("Por favor, ingresa una frase:");
let vocales = frase.split('').filter(char => 'aeiouAEIOU'.includes(char)).join('');
document.write(vocales)
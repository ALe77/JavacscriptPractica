const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);

function test2(x, y){
    return x*2;
    console.log(x);
    return x/2;
}

console.log(test2(10));

console.log("Gato"||"Perro");

console.log(0.5 + 0.1 === 0.6);

console.log(0.1 + 0.2 === 0.3);
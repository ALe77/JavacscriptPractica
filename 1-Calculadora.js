const prompt = require("prompt-sync")({ sigint: true });

function sumar(num1, num2){
    return num1 + num2;
}
function restar(num1, num2){
    return num1-num2;
}
function multiplicar(num1, num2){
    return num1*num2;
}
function dividir(num1,num2){
    return num1/num2;
}

function cuadradoDeUnNumero(num1){
    return multiplicar(num1,num1);
}

function promedioDeTresNumeros(num1,num2,num3){
    return dividir(sumar(sumar(num1,num2),num3),3);
}

function calcularPorcentaje(num1,num2){
    return dividir(multiplicar(num1,num2),100);
}

function generadorDePorcentaje(num1,num2){
    return dividir(multiplicar(num1,100),num2);
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------");
console.log("Que operacion desea realizar?:");
console.log("1- Sumar");
console.log("2- Restar");
console.log("3- Multiplicar");
console.log("4- Dividir");
console.log("5- Cuadrado de un numero");
console.log("6- Promedio de tres numeros");
console.log("7- Calcular porcentaje");
console.log("8- Porcentaje respecto al otro");
console.log("-----------------------------------------------------------------");
let respuesta = parseInt(prompt("Respuesta: "));

let num1 = parseInt(prompt("Ingrese un numero: "));
let num2;
let num3;
if (respuesta !== 5) {
    num2 = parseInt(prompt("Ingrese segundo numero: "));
    if (respuesta === 6) {
        num3 = parseInt(prompt("Ingrese tercer numero: "));
    }
}
switch (respuesta) {
    case 1:
        console.log("El resultado de la suma es: " + sumar(num1,num2));
        break;
    case 2:
        console.log("El resultado de la resta es: " + restar(num1,num2));
        break;
    case 3:
        console.log("El resultado de la multiplicacion es: " + multiplicar(num1,num2));
        break;
    case 4:
        if (num2!==0){
            console.log("El resultado de la division es: " + dividir(num1,num2));
        }
        else{
            console.log("No se puede dividir por cero");
        }
        break;
    case 5:
        console.log("El cuadrado del numero es: " + cuadradoDeUnNumero(num1));
        break;
    case 6:
        console.log("El promedio de los tres numeros es: " + promedioDeTresNumeros(num1,num2,num3));
        break;
    case 7:
        console.log("El "+ num2 + "%" + " de " + num1 + " es: " + calcularPorcentaje(num1,num2));
        break;
    case 8:
        console.log(num1 + " representa el " + generadorDePorcentaje(num1,num2) + "% de " + num2);
        break;
}
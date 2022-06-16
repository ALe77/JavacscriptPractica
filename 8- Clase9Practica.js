/*Sumar todas las notas y dividirlas entre la cantidad de notas a promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3

Algoritmo para convertir una cantidad de pesos a dólares.

Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su salario actual.

Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 10.5 mostrar aprobado, de lo contrario, mostrar desaprobado.

5- Ingresar un número y mostrar si es número par o impar. 

Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, 
mostrar el mensaje "ACCESO DENEGADO".

7 -Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.

Elaborar un programa que muestre el mayor de 10 números ingresados.
*/

const prompt = require("prompt-sync")({ sigint: true });

//5- Ingresar un número y mostrar si es número par o impar. 
/* function parImpar(numero){
    if (numero%2==0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");    
    }
}
let numero = parseInt(prompt("Ingrese un numero: "));
parImpar(numero);  */

//7 -Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la tabla de multiplicar de dicho número.
function tablaMultiplicar(numero){
    for (let i=1; i<=10; i++){
        console.log(numero+" x "+i+" = "+numero*i);
    }
}
let numero = parseInt(prompt("Ingrese un numero entre 1 y 12: "));
if (numero<=12 && numero>=1){
    tablaMultiplicar(numero);
}else{
    console.log("El numero no esta entre 1 y 12");
}

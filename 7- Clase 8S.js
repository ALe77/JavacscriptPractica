const prompt = require("prompt-sync")({ sigint: true });

function mostrarSiguientes10Numeros(numero){
    for (let i=1; i<= 10; i++){
        console.log(numero + i);
    }
}
//mostrarSiguientes10Numeros(10);

function numerosEntre(){
    let i=5;
    while (i<=20){
        console.log(i);
        i += 3;
    }
}
//numerosEntre();

function sumatoria(){
    let suma=0;
    for (let i=0; i<=100; i++){
        suma += i;
    }
    console.log(suma);
}
//sumatoria();

function factorial(numero){
    let fact=1;
    for (let i=1; i<=numero; i++){
        fact *= i;
    }
    console.log(fact);
}
//factorial(5);

function fibonacci(numero){
    let x=0;
    let y=1;
    console.log(x);
    do{
        console.log(y);
        z=x;
        x=y;
        y=z+y;
    }while (y<=numero)
}
//fibonacci(1597);

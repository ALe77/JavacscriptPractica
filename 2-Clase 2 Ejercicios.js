const prompt = require("prompt-sync")({ sigint: true });

function pulgadasACentimetros(pulgadas){
    return pulgadas*2.54;
}
function convierteURL(palabra){
    return `http://www.${palabra}.com`;
}
function admiracion(frase){
    return `${frase}!!!!!!!!!!!`;
}
function edadPerro(edad){
    return edad*7;
}
function horaTrabajo(sueldoMensual){
    return sueldoMensual/40;
}
function calculadorIMC(alturaMetros, pesoKilos){
    return pesoKilos/(alturaMetros*100);
}

let calculadorIMC = (alturaMetros, pesoKilos) => pesoKilos/(altura*100);

function pasarAMayusculas(frase){
    let text= frase.toUpperCase();
    return text;
}

function tipoDato(dato){
    return typeof dato;
}

function circunferencia(radio){
    return 2*radio*Math.PI;
}

console.log(circunferencia(10));
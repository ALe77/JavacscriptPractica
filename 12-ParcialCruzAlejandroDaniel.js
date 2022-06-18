const prompt = require("prompt-sync")({ sigint: true });

/* Ejercicio 1 */

function devuelveTriple(numero){
    return (numero*3);
}

function multiplicacion(numero1, numero2){
    return (numero1*numero2);
}

function division(numero1, numero2){
    if (numero1 !== 0 && numero2 !== 0){
        return (numero1/numero2);
    }
}

/* Ejercicio 2 */

let turista = {
    nombre : 'Alejandro',
    apellido : 'Cruz',
    temperatura : 39,
    estaVacunado : true
}

function control(objeto){
    if (objeto.temperatura < 37){
        return 'puede pasar';
    }else if (objeto.temperatura < 39 && objeto.estaVacunado == true){
        return 'puede pasar porque esta vacunado';
    }else if (objeto.temperatura >= 39){
        return 'no puede pasar';
    }
}

console.log(control(turista));

/* Ejercicio 3 */

let destinos = [];

let brasil = {
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
   }
   let rusia = {
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
   }
   let estadosUnidos = {
    cantidadDeVisitas : 1,
    clima: "nublado",
    habitantes: "329 millones"
   }

destinos.push(brasil,rusia,estadosUnidos);

console.log(destinos);

function siguienteViaje(arrayDestinos){
    for (let i=0; i<arrayDestinos.length; i++){
        arrayDestinos[i].cantidadDeVisitas++;
    }
    destinos = arrayDestinos;
    return destinos;
}

siguienteViaje(destinos);

console.log(destinos);

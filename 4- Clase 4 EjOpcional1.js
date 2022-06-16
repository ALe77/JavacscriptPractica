/* const prompt = require("prompt-sync")({ sigint: true });

let nave = {
    tipoDeNave : 'Espacial',
    pais : 'Argentina',
    cantidadDeTripulantes : 4,
    tripulantes : ['trip1','trip2','trip3','trip4'],
    paisTripulantes : ['Argentina','Brasil','Chile','Uruguay'],
    estado : 'Usada',
    despegar: function(){
        console.log("🚀 ¡Todo listo para el despegue!¡algo se rompió!");
        alert("¡BOOOM!");
    }
}

nave.despegar();

//pais dot notation
nave.pais;

//tipo de nave brackets notation
nave['tipoDeNave'];

//cantidad de tripulantes
nave.cantidadDeTripulantes;
nave.tripulantes.length; 

function serie(inicio, final, sumador){
    let array = [];
    for (i = inicio; i<=final; i += sumador){
        array.push(i);
    }
    return array;
}

console.log(serie(1,10,3));
*/
 
/* 5 - 

Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
que contenga el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
 */

/* function arregloDeObjetos(valor){
    let arreglo = [];
    for (let i=1; i<=valor; i++){

    }
} */


/* Arreglo de objetos 2
Debés crear una función llamada arregloDeObjetos que reciba un número y una
palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad
llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},
{hola: 5 }]
- arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]*/

/* function arregloDeObjetos(numero,palabra){
    let array = [];
    for(let i = 1;i<=numero;i++){
    let objeto={};
    objeto[palabra]=i
        array.push(objeto)
    }
    console.log(array);
}

arregloDeObjetos(10,"chau");
 */

//palindromo
function palindromo(palabra){
    let inverso = palabra.split('').reverse().join('');
    if (palabra==inverso){
        return true
    }else{
        return false
    }
}

console.log(palindromo('ana'));
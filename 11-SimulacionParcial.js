//Ejercicio 1:

//Objetos Dentro de Arreglos

/* 
Supongamos que tenemos un Arreglo llamado autos que tiene dos Objetos (un auto marca "Citroen" y otro marca "Honda").
*/

let autos = [
  {
    marca: "Citroen",
    modelo: "C3",
    año: 2013,
    dueño: "Juan",
    color: {
      capot: "gris",
      puertas: "negro",
    },
    dueñosAnteriores: [], // Lo compro 0KM
  },
  {
    marca: "Honda",
    modelo: "Fit",
    año: 2016,
    dueño: "Santiago",
    color: {
      capot: "rojo",
      puertas: "rojo",
    },
    dueñosAnteriores: ["Jorge", "Iván"],
  },
];

function modificarColorDuenio(duenioAnterior,nuevoDuenio,nuevoColorCapot){
  for (let i=0; i<autos.length; i++){
    if (autos[i].dueño==duenioAnterior){
      autos[i].dueñosAnteriores.push(duenioAnterior);
      autos[i].dueño=nuevoDuenio;
      autos[i].color.capot=nuevoColorCapot;      
    }
  }
}

modificarColorDuenio('Juan','Santiago','Negro');
console.log(autos);

/* 
Santiago le compra el auto a Juan y le pinta el capot a negro.
¿Cómo harías para modificar esas Propiedades?
*/



//PREGUNTAS - (solo enviar la opcion que para ustedes es correcta)

/* 
A)
Utilizamos pop() para ...

- Ingresar un elemento en la última posición del array
- Eliminar un elemento ubicado en la primera posición del array
- Ingresar un elemento en la primera posición del array
- Eliminar un elemento ubicado en la última posición del array @
*/

/*
B) 
Para encontrar la posición de un elemento dentro de un array, ¿cuál es la instrucción correcta?

- ["a", "b", "c", "d"].indexOf("c") @
- ["a", "b", "c", "d"].getItem("c")
- ["a", "b", "c", "d"].positionOf("c")
- ["a", "b", "c", "d"].get("c")
*/

/*
C) 
¿A qué valor estamos accediendo?

let miArray = ["Ana", "Pedro", "Pablo"]
miArray[miarray.lenth - 1]

- Ana
- Pedro 
- Pablo @
- undefined

*/

/*
D) 
¿Cuál o cuales son las formas correctas de agregarle un nuevo dato a un objeto llamado persona?

- persona."edad" = 25
- persona['edad'] = 25
- persona.edad = 25 @
- "persona".edad = 25

*/

/*
E) 
¿Qué se termina mostrando?

let perro = {
    nombre: "Charly",
    edad: 6
}
let key = "nombre"
console.log(perro[key])

- 0
- key
- nombre
- Charly @
*/

/*
F) 
¿Qué se termina mostrando?

let musicos = [
    {
        nombre: "Luca Prodan",
        idiomas: ["Ingles", "Español"]
    },
    {
        nombre: "Luis A. Spinetta",
        idiomas: ["Español"]
    }
]
console.log(musicos[1].idiomas[0])

- undefined
- Español @
- Inglés
- Luca Prodan
*/

/* 
//Ejercicio 2: 

Una funcion multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.

Una funcion resta que tome dos números como Parámetros y devuelva el la resta de los dos.

Una funcion sumador que tome 4 numeros como parametros y te devuelva la suma de los 4. 

*/

/* function multiplicador(a,b){
  return a*b
}

function resta(a,b){
  return a-b;
}

function sumador(a,b,c,d){
  return a+b+c+d;
} */

/* 
//Ejercicio 3: 

Giannina necesita necesita comprar todo lo necesario para poder cocinar unas pizzas:

let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]

- Agregá dos nuevos productos al final de la lista(lo que le quieras poner a tu pizza).

- Agregá dos productos al principio de tu lista(lo que le faltaria para la salsa).

- Determiná cuán largo es el Arreglo en este momento.

- Sacá un producto y guardalo en una Variable que se llame noHabia.

- Sacá un producto y guardalo en otra Variable que se llame comprado.

- ¿Cuán largo es el Arreglo ahora?

*/

let pizzas = ["harina", "levadura", "queso", "pure de tomates", "cebolla"]
pizzas.push('jamon');
pizzas.push('aceitunas');
pizzas.unshift('aceite');
pizzas.unshift('oregano');

pizzas.length;

let noHabia = pizzas.pop();
let comprado = pizzas.shift();

pizzas.length;
 
//Crear un array VACÍO, que tenga el nombre de autos. 



// Usando estos 3 Objetos

/* let ford = {
    año	 : 2015,
    color	: "blanco",
    puertas: 5
}
   
let peugeot = {
año	 : 2010,
color	: "rojo",
puertas: 3
}
   
let volkswagen = {
año	 : 2012,
color	: "gris",
puertas: 4
}

let autos = [];
autoss.push({ford});
autoss.push({peugeot});
autoss.push({volkswagen});

console.log(autos); */

//Estos 3 objetos, ahora tenes que pensar como podrias agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)




// Mostrar por consola el array para ver que contenga esos objetos.


   

/* Tenes que crear una función que reciba el array autos como unico parámetro, 
e incremente en 3 la cantidad de puertas que van a tener los autos en el futuro con una modificacion, 
llámala futurosAutos. Debes utilizar una estructura de repetición. */


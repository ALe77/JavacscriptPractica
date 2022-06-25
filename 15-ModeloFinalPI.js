//EJERCICIO 1
/* const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ]; */
  //1-¿Qué tipo de dato contiene la variable ‘alumnos’?
  // Es un array de objetos literales
  //2-¿Qué propiedades tiene la estructura definida en el archivo final.js?
    
//EJERCICIO 2 
alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
    }
//1-Crear un método que retorne el promedio de notas. (*)
function promedioNotas(alu){
    let suma=0
    for(let i=0;i<alu.notas.length;i++){
        suma += alu.notas[i];
    }
    return suma/alu.notas.length;
}
console.log(promedioNotas(alumno));


//2-Crear una función que ordene las notas del alumno de forma descendente. (*)

//EJERCICIO 3
// 1-Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.
// 2-Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3. 
// 3-Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.
// 4-Crear una función que retorne la suma de las diagonales de la matriz.
    

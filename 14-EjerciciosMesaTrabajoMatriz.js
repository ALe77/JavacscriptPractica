let numeros = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
  ];
  
  /**
   * Suma los valores que sean mayores
   * o iguales a 10, pero menor a 1000.
   */
  function Sumar(numeros) {
    let sumatoria = 0;
    for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros[i].length; j++) {
        if (numeros[i][j] >= 0 && numeros[i][j] < 1000) {
          sumatoria += numeros[i][j];
        }
      }
    }
    return sumatoria;
  }
  
  console.log(Sumar(numeros));
  
/* const prompt = require("prompt-sync")({ sigint: true });

let gastos=[];
function agregarGastos(matriz){
    for (let i=0;i<4;i++){
        matriz[i]=[i]
        for (let j=0; j<7;j++){
            matriz[i][j] = parseInt(prompt("Ingrese un numero: "));
        }
    }
    return matriz;
}

gastos=agregarGastos(gastos);
console.log(gastos);
 */
function gastoSemanal(numeroSemana, matrizGastos){
    let sumaSemana=0;
    for (let j=0; j<matrizGastos[numeroSemana-1].length;j++){
        sumaSemana += matrizGastos[numeroSemana-1][j]; 
    }
    return sumaSemana;
}

function gastoPorDia(numeroDia, matrizGastos){
    let sumaDia = 0;
    for (let i=0; i<matrizGastos.length; i++){
        sumaDia += matrizGastos[i][numeroDia-1];
    }
    return sumaDia;
}

function totalGastoMensual(matrizGastos){
    sumaMes = 0;
    for(let i=0;i<matrizGastos.length;i++){
        for(let j=0;j<matrizGastos[i].length;j++){
            sumaMes += matrizGastos[i][j];
        }
    }
    return sumaMes;
}

function semanaConMasGastos(matrizGastos){
    let sumaSemana=0;
    let maximo = 0;
    for(let i=0;i<matrizGastos.length;i++){
        for(let j=0;j<matrizGastos[i].length;j++){
            sumaSemana += matrizGastos[i][j];
        }
        if (sumaSemana>maximo){
            maximo=sumaSemana;
        }
        sumaSemana=0;
    }
    return maximo
}

let gastos=[[1135,2500,900,1600,2800,3650,1100],[1750,1890,1900,1300,898,1750,2800],[1700,1150,1690,1900,1770,4500,2560],[800,1250,1430,2100,1980,1270,950]]

console.log(gastoSemanal(1,gastos));
console.log(gastoSemanal(2,gastos));
console.log(gastoSemanal(3,gastos));
console.log(gastoSemanal(4,gastos));
console.log(gastoPorDia(1,gastos));
console.log(totalGastoMensual(gastos));
console.log(semanaConMasGastos(gastos))
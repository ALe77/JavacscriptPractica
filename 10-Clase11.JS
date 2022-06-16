let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco = {
      clientes : arrayCuentas,
      consultarCliente : function(titular){
        let clienteEncontrado; 
        this.clientes.forEach(cliente => {
            cliente.titularCuenta==titular ? clienteEncontrado = cliente : "";  
        }
        )
        return clienteEncontrado ? clienteEncontrado : "Cliente no encontrado";     
      },
      deposito : function(titular,deposito){
        let clienteEncontrado = this.consultarCliente(titular);
        if (typeof clienteEncontrado !== 'string'){
            clienteEncontrado.saldoEnPesos += deposito;
            return 'Se actualizo el saldo del cliente';
        }else{
            return 'No se encontro el cliente';
        }
      },
      extraccion : function(titular, monto){
        let clienteEncontrado = this.consultarCliente(titular);
        if (typeof clienteEncontrado !== 'string'){
            if (clienteEncontrado.saldoEnPesos>=monto){
                clienteEncontrado.saldoEnPesos -= monto;
                return 'Se actualizo su saldo';
            }else {
                return 'No hay suficiente saldo';
            }
        }else{
            return 'No se encontro el cliente';
        }
      }
  }

  console.log(banco.consultarCliente("Jacki Shurmer"));
  banco.deposito("Jacki Shurmer", 1000);
  console.log(banco.consultarCliente("Jacki Shurmer"));

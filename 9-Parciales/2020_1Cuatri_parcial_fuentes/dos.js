function mostrar() {
  /*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
       Tipo validad("arena";"cal";"cemento") 
       Cantidad de bolsas,
           Precio por bolsa (más de cero ),
           
           Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
       Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
        a)
        El importe total a pagar , bruto sin descuento y...
        b)
        el importe total a pagar con descuento(solo si corresponde)
        d)
        Informar el tipo con mas cantidad de bolsas.		
        f)
        El tipo mas caro
      */
  var respuesta;
  
  var tipoProducto;
  var cantidadPorCompra;
  var precioPorBolsa;
  
  var acumuladorBolsasArena;
  var acumuladorBolsasCal;
  var acumuladorBolsasCemento;
  
  var acumuladorTotalBruto;
  var acumuladorTotalConDescuentos;
  
  acumuladorTotalBruto = 0;
  acumuladorTotalConDescuentos = 0;
  
  var tipoConMasBolsas;
  var cantidadTipoConMasBolsas;
  var tipoMasCaro;
  var precioTipoMasCaro;
  
  precioTipoMasCaro = 0;
  respuesta = "si";
  
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorBolsasCemento = 0;
  
  while (respuesta == "si") {
    tipoProducto = prompt("Ingrese el tipo de producto", "arena/cal/cemento");
    tipoProducto = tipoProducto.toLowerCase();
  
    while (tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento") {
      tipoProducto = prompt("error, ingrese un tipo correcto (arena, cal o cemento)", "arena/cal/cemento");
      tipoProducto = tipoProducto.toLowerCase();
    }
  
    cantidadPorCompra = prompt("Ingrese la cantidad de bolsas a comprar");
    cantidadPorCompra = parseInt(cantidadPorCompra);
  
    while (cantidadPorCompra < 1) {
      cantidadPorCompra = prompt("Ingrese una cantidad valida");
      cantidadPorCompra = parseInt(cantidadPorCompra);
    }
  
    precioPorBolsa = prompt("Ingrese el precio por bolsa");
    precioPorBolsa = parseInt(precioPorBolsa);
  
    while (precioPorBolsa < 1) {
      precioPorBolsa = prompt("Ingrese un precio valido, mayor a 0, por bolsa");
      precioPorBolsa = parseInt(precioPorBolsa);
    }
  
    var importeTotalAPagarBruto;
    var importeTotalAPagarConDescuento;
    importeTotalAPagarBruto = (precioPorBolsa * cantidadPorCompra);
    var descuentoAplicable;
    descuentoAplicable = 0;
  
    if (cantidadPorCompra > 10) {
      if (cantidadPorCompra > 30) {
        descuentoAplicable = 0.25;
      }
      else {
        descuentoAplicable = 0.15;
      }
      var descuento;
      descuento = importeTotalAPagarBruto * descuentoAplicable;
      importeTotalAPagarConDescuento = importeTotalAPagarBruto - descuento;
    }
    else {
      importeTotalAPagarConDescuento = importeTotalAPagarBruto;
    }
  
    acumuladorTotalBruto += importeTotalAPagarBruto;
    acumuladorTotalConDescuentos += importeTotalAPagarConDescuento;
  
    switch (tipoProducto) {
      case "arena":
        acumuladorBolsasArena += cantidadPorCompra;
        break;
      case "cal":
        acumuladorBolsasCal += cantidadPorCompra;
        break;
      default:
        //Es cemento
        acumuladorBolsasCemento += cantidadPorCompra;
        break;
    }
  
    if (precioPorBolsa > precioTipoMasCaro) {
      tipoMasCaro = tipoProducto;
      precioTipoMasCaro = precioPorBolsa;
    }
  
    respuesta = prompt("Desea seguir ingresando productos?", "si/no");
    respuesta = respuesta.toLowerCase();
  }
  
  if (acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento) {
    //el que mas tiene es la arena.
    tipoConMasBolsas = tipoProducto;
    cantidadTipoConMasBolsas = acumuladorBolsasArena;
  }
  else {
    if (acumuladorBolsasCal > acumuladorBolsasArena && acumuladorBolsasCal > acumuladorBolsasCemento) {
      //el que mas tiene es la cal.
      tipoConMasBolsas = tipoProducto;
      cantidadTipoConMasBolsas = acumuladorBolsasCal;
    }
    else {
      if (acumuladorBolsasCemento > acumuladorBolsasArena && acumuladorBolsasCemento > acumuladorBolsasCal) {
        //el que mas tiene es el cemento.
        tipoConMasBolsas = tipoProducto;
        cantidadTipoConMasBolsas = acumuladorBolsasCemento;
      }
      else {
        tipoConMasBolsas = "empate";
      }
    }
  }
  if (tipoConMasBolsas == "empate") {
    alert("No se puede mostrar el producto con mas bolsas compradas, ya que hubo un empate");
  }
  else {
    alert("El tipo con mas cantidad de bolsas es: " + tipoConMasBolsas);
  }
  if (acumuladorTotalBruto == acumuladorTotalConDescuentos) {
    alert("el precio final es: " + acumuladorTotalBruto);
  }
  else {
    alert("el precio final con descuento aplicado es: " + acumuladorTotalConDescuentos);
  }

  alert("el tipo mas caro fue: " + tipoMasCaro);
}

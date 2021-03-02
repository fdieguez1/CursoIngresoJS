function mostrar() {
  /*Sistema de registro de movimientos en cuenta
  
  Teniendo un saldo previo del dia anterior de $3000 en la caja.
  
  Ingresar "monto"(positivo o negativo, valores maximos y minimos -1000 / 1000), "tipo producto" (sólo muebles, inmuebles o compras), "unidades"(mayor a 0) y "descripción" (no puede dejarse vacia, maximo 10 caracteres en total) mientras el usuario asi lo desee
  
 */
  var saldoPrevio;
  var acumuladorCajaEnElDia;
  var banderaPrimerMovimientoMueble;
  var banderaPrimerMovimientoInmueble;
  var banderaPrimerMovimientoCompras;
  var acumuladorTipos;
  var balanceTotalMuebles;
  var montoMinimoCompras;
  var montoMaximoCompras;
  var minimoUnidades;
  var descripcionMinimoUnidades;
  var banderaPrimeraCompra;
  var contadorMovimientos;

  saldoPrevio = 3000;
  acumuladorCajaEnElDia = 0;
  balanceTotalMuebles = 0;
  contadorMovimientos = 0;

  banderaPrimerMovimientoMueble = "si";
  banderaPrimerMovimientoInmueble = "si";
  banderaPrimerMovimientoCompras = "si";
  banderaPrimeraCompra = "si";

  var respuesta = "si";
  while (respuesta == "si") {
    var monto;
    var tipoProducto;
    var unidades;
    var descripcion;
    monto = prompt("ingrese monto");
    monto = parseFloat(monto);
    while (isNaN(monto) == true || monto > 1000 || monto < -1000) {
      monto = prompt("reingrese un monto valido");
      monto = parseFloat(monto);
    }
    //listo el monto valido
    acumuladorCajaEnElDia += monto;

    tipoProducto = prompt("ingrese tipoProducto", "muebles,inmuebles,compras");
    tipoProducto = tipoProducto.toLowerCase();
    while (tipoProducto != "muebles" && tipoProducto != "inmuebles" && tipoProducto != "compras") {
      tipoProducto = prompt("REingrese tipoProducto valido", "muebles,inmuebles,compras");
      tipoProducto = tipoProducto.toLowerCase();
    }
    //listo el tipo producto

    unidades = prompt("ingrese las unidades");
    unidades = parseInt(unidades);
    while (isNaN(unidades) == true || unidades < 1) {
      unidades = prompt("REingrese las unidades");
      unidades = parseInt(unidades);
    }
    //listas las unidades


    descripcion = prompt("ingrese una descripcion, max 10 caracteres");
    while (descripcion.length < 1 || descripcion.length > 10) {
      descripcion = prompt("REingrese una descripcion valida, max 10 caracteres");
    }
    //lista la descripcion


    switch (tipoProducto) {
      case "compras":
        if (banderaPrimerMovimientoCompras == "si") {
          if (contadorMovimientos == 0) {
            acumuladorTipos = tipoProducto + " ";
          }
          else {
            acumuladorTipos += tipoProducto + " ";
          }
          montoMinimoCompras = monto;
          montoMaximoCompras = monto;
          banderaPrimerMovimientoCompras = "no";
        }
        if (monto < montoMinimoCompras) {
          montoMinimoCompras = monto;
        }
        if (monto > monotoMaximoCompras) {
          montoMaximoCompras = monto;
        }
        break;
      case "inmuebles":
        if (banderaPrimerMovimientoInmueble == "si") {
          if (contadorMovimientos == 0) {
            acumuladorTipos = tipoProducto + " ";
          }
          else {
            acumuladorTipos += tipoProducto + " ";
          }
          banderaPrimerMovimientoInmueble = "no";
        }
        break;
      case "muebles":
        if (banderaPrimerMovimientoMueble == "si") {
          if (contadorMovimientos == 0) {
            acumuladorTipos = tipoProducto + " ";
          }
          else {
            acumuladorTipos += tipoProducto + " ";
          }
          banderaPrimerMovimientoMueble = "no";
        }
        balanceTotalMuebles += monto;
        break;
    }

    if (banderaPrimeraCompra == "si") {
      minimoUnidades = unidades;
      descripcionMinimoUnidades = descripcion;
      banderaPrimeraCompra = "no";
    }
    else {
      if (unidades < minimoUnidades) {
        minimoUnidades = unidades;
        descripcionMinimoUnidades = descripcion;
      }
    }
    contadorMovimientos++;
    //pregunto si seguir
    respuesta = prompt("desea continuar?", "si/no");
    respuesta = respuesta.toLowerCase();
  }
  var calculoCaja;
  calculoCaja = saldoPrevio + acumuladorCajaEnElDia;
  alert("Saldo de caja al final del dia: " + calculoCaja + ". Siendo " + saldoPrevio + " de saldo previo y " + acumuladorCajaEnElDia + " de movimientos en el día.");
  alert("Se compraron los siguientes tipos de producto: " + acumuladorTipos);
  alert("el balance total de muebles fue de " + balanceTotalMuebles);
  if (banderaPrimerMovimientoCompras != "si") {
    alert("el monto minimo en compras fue " + montoMinimoCompras + " y el maximo fue " + montoMaximoCompras);
  }
  else {
    alert("no hubo movimientos del tipo compras");
  }
  alert("la descripcion del producto con menos unidades es: " + descripcionMinimoUnidades);
  if (contadorMovimientos > 5){
    alert("El balance sera divido en dos hojas");
  }
  /* A-Mostrar el saldo de la caja al final del dia. Discriminar y mostrar que es del dia anterior y que es del dia actual.
  B-Mostrar que tipos de producto se compraron ese dia, concatenando sus nombres
  C-Mostrar el balance total de muebles.
  D-Mostrar el monto maximo y minimo ingresados en "compras".
  F-Mostrar la descripcion del movimiento con menor cantidad de "unidades".
  
  Si el usuario ingreso mas de 5 movimientos, mostrar un aviso que diga, "El balance sera divido en dos hojas"
  */
}

/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, 
			de cada una debo obtener los siguientes datos: 
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , 
			el precio (validar entre 100 y 300),
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
			 la Marca y el fabricante. 
			Se debe Informar al usuario lo siguiente:

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra 
			c) Cuántas unidades de Barbijos se compraron en total
			*/
function mostrar() {
	var contadorProductos;
	var cantidadRequerida;

	var contadorComprasBarbijos;
	var contadorComprasJabones;
	var contadorComprasAlcohol;

	var respuestaTipoProducto;

	var precioJabonMasCaro;
	var fabricanteJabonMasCaro;
	var cantidadJabonMasCaro;

	var productoConMasCantidad;
	var promedioProductoMasCantidad;

	var montoTotalBarbijos;
	var montoTotalJabones;
	var montoTotalAlcohol;

	var totalBarbijosComprados;
	var totalJabonesComprados;
	var totalAlcoholComprado;

	contadorProductos = 0;
	cantidadRequerida = 5;

	contadorComprasBarbijos = 0;
	contadorComprasJabones = 0;
	contadorComprasAlcohol = 0;

	montoTotalBarbijos = 0;
	montoTotalJabones = 0;
	montoTotalAlcohol = 0;

	totalBarbijosComprados = 0;
	totalJabonesComprados = 0;
	totalAlcoholComprado = 0;

	while (contadorProductos < cantidadRequerida) {
		respuestaTipoProducto = prompt("Ingrese el tipo de producto: Barbijo / Jabón / Alcohol");
		respuestaTipoProducto = respuestaTipoProducto.toLowerCase();
		while (respuestaTipoProducto != "barbijo" && respuestaTipoProducto != "jabón" && respuestaTipoProducto != "jabon" && respuestaTipoProducto != "alcohol") {
			//tipo incorrecto
			respuestaTipoProducto = prompt("Error - Ingrese un tipo de producto correcto: Barbijo / Jabón / Alcohol");
			respuestaTipoProducto = respuestaTipoProducto.toLowerCase();
		}
		//tipo correcto
		var precioProducto;
		precioProducto = 0;
		precioProducto = prompt("Ingrese un precio para el producto");
		precioProducto = parseInt(precioProducto);

		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			//fuera de rango o no es un numero
			precioProducto = prompt("Error - Ingrese un precio válido para el producto entre 100 y 300 inclusive");
			precioProducto = parseInt(precioProducto);
		}
		var marca;
		marca = prompt("Ingrese la marca del producto");//esto no se muestra ni usa en ningun lado :P

		var fabricante;
		fabricante = prompt("Ingrese el nombre del fabricante");

		var unidades = prompt("Ingrese la cantidad de unidades (Mínimo 1, máximo 1000)");
		unidades = parseInt(unidades);
		while (isNaN(unidades) || unidades < 1 || unidades > 1000) {
			var unidades = prompt("Error - Ingrese una cantidad válida, solo números, entre 1 y 1000");
			unidades = parseInt(unidades);
		}
		switch (respuestaTipoProducto) {
			case "barbijo":
				//es barbijo
				contadorComprasBarbijos++;
				var calculo = unidades * precioProducto;
				montoTotalBarbijos += calculo;
				totalBarbijosComprados += unidades;
				break;
			case "jabon":
			case "jabón":
				//es jabon
				if (precioProducto > precioJabonMasCaro || contadorComprasJabones == 0) {
					//es el primero, o el jabon mas caro
					precioJabonMasCaro = precioProducto;
					fabricanteJabonMasCaro = fabricante;
					cantidadJabonMasCaro = unidades;
				}
				contadorComprasJabones++;
				var calculoTotal = unidades * precioProducto;
				montoTotalJabones += calculoTotal;
				totalJabonesComprados += unidades;
				break;
			default:
				//es alcohol
				contadorComprasAlcohol++;
				var calculoTotal = unidades * precioProducto;
				montoTotalAlcohol += calculoTotal;
				totalAlcoholComprado += unidades;
				break;
		}
		contadorProductos++;
	}

	if (totalBarbijosComprados > totalJabonesComprados && totalBarbijosComprados > totalAlcoholComprado) {
		productoConMasCantidad = "Barbijo";
		promedioProductoMasCantidad = montoTotalBarbijos / contadorComprasBarbijos;
	}
	else {
		if (totalJabonesComprados > totalBarbijosComprados && totalJabonesComprados > totalAlcoholComprado) {
			productoConMasCantidad = "Jabón";
			promedioProductoMasCantidad = montoTotalJabones / contadorComprasJabones;
		}
		else {
			if (totalAlcoholComprado > totalBarbijosComprados && totalAlcoholComprado > totalJabonesComprados) {
				productoConMasCantidad = "Alcohol";
				promedioProductoMasCantidad = montoTotalAlcohol / contadorComprasAlcohol;
			}
			else {
				productoConMasCantidad = "Empate";
			}
		}
	}
	alert("a) Fabricante de jabones mas caro: " + fabricanteJabonMasCaro + ". Cantidad: " + cantidadJabonMasCaro);
	if (productoConMasCantidad == "Empate") {
		alert("b) No se puede determinar el producto con mas unidades, debido a un empate entre dos productos");
	}
	else {
		alert("b) Producto mas comprado: " + productoConMasCantidad + ". Precio promedio de compra: " + promedioProductoMasCantidad);
	}
	alert("c) Total de barbijos comprados: " + totalBarbijosComprados);
}
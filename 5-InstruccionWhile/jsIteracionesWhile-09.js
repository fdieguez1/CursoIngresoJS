/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	var banderaDelPrimeroPar;
	var banderaDelPrimeroNegativo;
	var numeroIngresado;
	var numeroMenorPar;
	var numeroMayorNegativo;
	var respuesta;
	//iniciar variables
	banderaDelPrimeroPar = "es el primero par";
	banderaDelPrimeroNegativo = "es el primero negativo"
	respuesta = 'si';
	while (respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado < 0) {
			//es negativo
			if (banderaDelPrimeroNegativo == "es el primero negativo" || numeroIngresado > numeroMayorNegativo) {
				numeroMayorNegativo = numeroIngresado;
				banderaDelPrimeroNegativo = "ya no es el primer numero negativo";
			}
		}
		if (numeroIngresado % 2 == 0) {
			//es Par
			if (banderaDelPrimeroPar == "es el primero par" || numeroIngresado < numeroMenorPar) {
				numeroMenorPar = numeroIngresado;
				banderaDelPrimeroPar = "ya no es el primer numero par";
			}
		}
		respuesta = prompt("desea continuar?");
		respuesta = respuesta.toLowerCase();
	}
	txtIdMaximo.value = numeroMayorNegativo;
	txtIdMinimo.value = numeroMenorPar;
}//FIN DE LA FUNCIÓN
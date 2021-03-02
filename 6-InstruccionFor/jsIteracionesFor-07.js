function mostrar() {
	var conteo;
	var numeroIngresado;

	conteo = 0;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	while (isNaN(numeroIngresado)) {
		numeroIngresado = prompt("Ingrese un numero valido");
		numeroIngresado = parseInt(numeroIngresado);
	}
	var numerosDivisores;
	numerosDivisores = "";
	for (i = 0; i < numeroIngresado; i++) {
		if (numeroIngresado % i == 0) {
			numerosDivisores += i + " ";
			conteo++;
		}
	}
	alert("conteo de divisores: " + conteo);
	alert("los divisores son: " + numerosDivisores);


}//FIN DE LA FUNCIÓN
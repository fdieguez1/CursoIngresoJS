function mostrar() {
	//tomo la edad  
	var edadInput = txtIdEdad.value;
	var parseEdad = parseInt(edadInput);
	if (parseEdad > 17) {
		alert("La persona es mayor de edad");
	}
	else {
		alert("La persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN
function mostrar() {
	var edadValue = txtIdEdad.value;
	var parsedEdad = parseInt(edadValue);
	var esCasadoValue = estadoCivil.value;
	if (parsedEdad < 18 && esCasadoValue != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN
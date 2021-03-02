function mostrar()
{
	//tomo la edad  
	var edadValue;
	var parsedEdad;
	var esCasadoValue;

	edadValue = txtIdEdad.value;
	parsedEdad = parseInt(edadValue);
	esCasadoValue = estadoCivil.value;

	if (esCasadoValue == "Soltero" && parsedEdad > 17){
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN
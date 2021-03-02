function mostrar() 
{
	//tomo la edad
	var edadValue = txtIdEdad.value;
	var parsedEdad = parseInt(edadValue);

	if (parsedEdad > 17) 
	{
		alert("Es mayor de 18 años");
	}
	else {
		if (parsedEdad > 12) 
		{
			alert("Es adolescente");
		}
		else 
		{
			alert("Es un niño");
		}
	}
}//FIN DE LA FUNCIÓN
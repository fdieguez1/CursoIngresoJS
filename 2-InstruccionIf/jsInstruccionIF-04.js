function mostrar()
{
	//tomo la edad  
	var edadInput = txtIdEdad.value;
	var parseEdad = parseInt(edadInput);
	if (parseEdad > 12 && parseEdad < 18) 
	{
		alert("La persona es adolescente");
	}

}//FIN DE LA FUNCIÓN
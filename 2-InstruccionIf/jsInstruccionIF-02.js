function mostrar()
{
	//tomo la edad  
	var edadInput = txtIdEdad.value;
	var parseEdad = parseInt(edadInput);
	if (parseEdad >= 18){
		alert("La persona es mayor de edad");
	}
}//FIN DE LA FUNCIÓN
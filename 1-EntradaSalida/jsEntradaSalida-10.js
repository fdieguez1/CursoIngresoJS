/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numberOneValue;

	var numberOneParsed;

	numberOneValue = document.getElementById("txtIdImporte").value;
	
	numberOneParsed = parseInt(numberOneValue);

	var proceso = numberOneParsed * 0.75;
	document.getElementById("txtIdResultado").value = proceso;
}

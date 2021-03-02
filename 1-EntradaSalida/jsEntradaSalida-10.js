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
	
	numberOneParsed = parseFloat(numberOneValue);

	//var descuento = numberOneParsed * 25 / 100;
	//var proceso = numberOneParsed - descuento;
	
	//var descuento = numberOneParsed * 0.25;
	//var proceso = numberOneParsed - descuento;

	//var proceso = numberOneParsed - (numberOneParsed * 0.25);

	var proceso = numberOneParsed * 0.75;
	document.getElementById("txtIdResultado").value = proceso;
}
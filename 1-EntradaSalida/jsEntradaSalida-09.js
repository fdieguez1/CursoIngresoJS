/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numberOneValue;

	var numberOneParsed;

	numberOneValue = document.getElementById("txtIdSueldo").value;
	
	numberOneParsed = parseFloat(numberOneValue);

	var proceso = numberOneParsed * 1.1;
	document.getElementById("txtIdResultado").value = proceso;
}

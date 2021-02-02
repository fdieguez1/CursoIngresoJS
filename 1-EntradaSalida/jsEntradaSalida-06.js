/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroUno").value;
	numberTwoValue = document.getElementById("txtIdNumeroDos").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed + numberTwoParsed;
	alert(proceso);
}


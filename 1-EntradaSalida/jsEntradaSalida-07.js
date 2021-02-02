/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	
function sumar()
{	
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroUno").value;
	numberTwoValue = document.getElementById("txtIdNumeroDos").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed + numberTwoParsed;
	alert("La suma es: " +  proceso);	
}

function restar()
{
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroUno").value;
	numberTwoValue = document.getElementById("txtIdNumeroDos").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed - numberTwoParsed;
	alert("La resta es: " +  proceso);	
}

function multiplicar()
{ 
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroUno").value;
	numberTwoValue = document.getElementById("txtIdNumeroDos").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed * numberTwoParsed;
	alert("La multiplicacion es: " +  proceso);	
}

function dividir()
{
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroUno").value;
	numberTwoValue = document.getElementById("txtIdNumeroDos").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed / numberTwoParsed;
	alert("La division es: " +  proceso);	
}


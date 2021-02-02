/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numberOneValue;
	var numberTwoValue;

	var numberOneParsed;
	var numberTwoParsed;

	numberOneValue = document.getElementById("txtIdNumeroDividendo").value;
	numberTwoValue = document.getElementById("txtIdNumeroDivisor").value;

	numberOneParsed = parseInt(numberOneValue);
	numberTwoParsed = parseInt(numberTwoValue);

	var proceso = numberOneParsed % numberTwoParsed;
	alert("El resto es: " +  proceso);	
}

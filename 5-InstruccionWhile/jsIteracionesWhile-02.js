/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=0; 
	var numero;
	numero = 10;
	while (contador < 10){
		document.write(numero +  "<br />")
		numero--;
		contador++;
	}

	

}//FIN DE LA FUNCIÓN
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUnoInput = txtIdPrecioUno.value;
    var precioDosInput = txtIdPrecioDos.value;
    var precioTresInput = txtIdPrecioTres.value;

    var precioUnoParsed = parseInt(precioUnoInput);
    var precioDosParsed = parseInt(precioDosInput);
    var precioTresParsed = parseInt(precioTresInput);

    var proceso = precioUnoParsed + precioDosParsed + precioTresParsed;
    alert("El total es: " + proceso);


}
function Promedio () 
{
	var precioUnoInput = txtIdPrecioUno.value;
    var precioDosInput = txtIdPrecioDos.value;
    var precioTresInput = txtIdPrecioTres.value;

    var precioUnoParsed = parseInt(precioUnoInput);
    var precioDosParsed = parseInt(precioDosInput);
    var precioTresParsed = parseInt(precioTresInput);

    var proceso = (precioUnoParsed + precioDosParsed + precioTresParsed) / 3;
    alert("El promedio es: " + proceso);
}
function PrecioFinal () 
{
    var precioUnoInput = txtIdPrecioUno.value;
    var precioDosInput = txtIdPrecioDos.value;
    var precioTresInput = txtIdPrecioTres.value;

    var precioUnoParsed = parseInt(precioUnoInput);
    var precioDosParsed = parseInt(precioDosInput);
    var precioTresParsed = parseInt(precioTresInput);

    var proceso = (precioUnoParsed + precioDosParsed + precioTresParsed) * 1.21;
    alert("El precio final (+IVA 21%) es: " + proceso);	
}
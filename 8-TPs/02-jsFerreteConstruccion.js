/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var inputLargo = txtIdLargo.value;
    var inputAlto = txtIdAncho.value;

    var parsedLargo = parseInt(inputLargo);
    var parsedAlto = parseInt(inputAlto);

    var perimetro = (parsedLargo + parsedAlto) * 2;
    var proceso = perimetro * 3;

    alert("Se necesita: " + proceso + "mts de alambre para el terreno rectangular.");
}
function Circulo () 
{
    var pi = Math.PI;
    var inputRadio = txtIdRadio.value;

    var parsedRadio = parseInt(inputRadio);

    var perimetro = pi * parsedRadio * 2;
    var proceso = perimetro * 3;

    alert("Se necesita: " + proceso + "mts de alambre para el terreno circular.");
}
function Materiales () 
{
	var inputLargo = txtIdLargo.value;
    var inputAlto = txtIdAncho.value;

    var parsedLargo = parseInt(inputLargo);
    var parsedAlto = parseInt(inputAlto);

    var area = parsedLargo * parsedAlto;
    var bolsasCementoPorM2 = 2;
    var calPorM2 = 3;

    var cemento = area * bolsasCementoPorM2;
    var cal = area * calPorM2;
    alert("Se necesitan: " + cemento + " bolsas de cemento y " + cal + " bolsas de cal para el terreno rectangular.");
}
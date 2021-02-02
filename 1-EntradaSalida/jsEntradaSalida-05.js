/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var name = document.getElementById("txtIdNombre").value;
	var lastName = prompt("Ingrese su Apellido", "Apellido");
	var age = document.getElementById("txtIdEdad").value;
	alert("Su nombre es "+ name + " " + lastName + " y su edad es " + age + " años");
}


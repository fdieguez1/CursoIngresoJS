/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var name;
	name = document.getElementById("txtIdNombre").value;
	
	var age;
	age = document.getElementById("txtIdEdad").value;

	alert("Su nombre es "+ name + " y su edad es " + age + " años");
}


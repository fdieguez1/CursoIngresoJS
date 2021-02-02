/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
	var nombre = prompt("Ingrese su nombre", "Natalia Natalia");
	if (nombre != null) {
		alert("Hola " + nombre);
	}
}


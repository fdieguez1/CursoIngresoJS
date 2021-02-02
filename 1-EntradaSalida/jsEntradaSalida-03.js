function mostrar() {

	var nombreDelAlumno = document.getElementById('txtIdNombre').value;
	var edadDelAlumno = prompt("Ingrese su edad: ", "Años");
	alert("Ud  se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años.");
}
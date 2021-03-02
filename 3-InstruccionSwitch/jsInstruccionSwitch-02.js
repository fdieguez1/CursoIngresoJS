function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	switch (mesDelAño) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		default:
			alert("ya paso el invierno, ahora el calor")
			break;
	}




}//FIN DE LA FUNCIÓN
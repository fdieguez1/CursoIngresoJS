function mostrar() {
	//tomo el mes
	var mesDelAño = txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 días.")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días.")
			break;
		case "Febrero":
			alert("Tiene 28 días.")
			break;
		default:
			alert("le pifie");
			break;
	}
}//FIN DE LA FUNCIÓN
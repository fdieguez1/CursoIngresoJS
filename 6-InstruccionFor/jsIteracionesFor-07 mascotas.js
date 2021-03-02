// Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
// necesitan saber si es un gato o un perrro u "otra cosa", (solo hay esos tres tipos)
// el tipo de pelaje(corto, largo, sin pelo),
// la edad de la mascota(edad validada);
// el nombre(una palabra)
// la raza(una palabra)
// el peso(peso validado)
// el estadoClinico(enfermo, internado o adopcion)
// la temperaruta corporal

// y nos piden informar solo si existe
// a) El perro mas pesado
// b) El porcentaje de enfermos sobre el total de mascotas
// c) El nombre de la ultima mascota de tipo "otra cosa"
// d) El animal sin pelo con menor temperatura corporal
// e) Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
// f) Sumando gatos y perros que porcentaje del total de mascotas son ?
// g) Que estado clinico tiene la menor cantidad de mascotas
// H) Cual es el promedio de kilos de peso de tomando todas las mascotas
// i) El nombre y raza del gato sin pelos mas liviano

function mostrar() {
	//Porcentajes
	var porcentajeAnimalesEnfermosOIntSobreTotal;
	var porcentajePerrosYGatosSobreTotal;

	//Maximos y minimos
	var perroMasPesado;
	var ultimaMascotaTipoCosa;
	var animalSinPeloConMenorTempCorp;
	var temperaturaAnimalSinPeloConMenorTemp;
	var tipoMascotaConMayorPromedioTempCorporal;

	//Promedios
	var tempPromedioPerros;
	var tempPromedioGatos;
	var tempPromedioOtraCosa;

	//Acumuladores
	var acumuladorTempPerros;
	var acumuladorTempGatos;
	var acumuladorTempOtraCosa;
	var acumuladorPesoMascotasTotal;
	var promedioPesoTotal;
	var razaGatoMasLivianoSinPelo;
	var nombreGatoMasLivianoSinPelo;
	var pesoGatoMasLivianoSinPelo;

	//Contadores
	var contadorAnimalesEnfermosOInternados;
	var contadorMascotas;
	var contadorPerros;
	var contadorGatos;
	var contadorOtraCosa;
	var contadorPerrosYGatos;
	var contadorMascotasAdoptadas;
	var contadorMascotasEnfermas;
	var contadorMascotasInternadas;

	//Banderas
	var banderaHuboGatosSinPelo;
	var banderaHuboAnimalSinPelo;

	//Inicializaciones
	contadorPerros = 0;
	contadorGatos = 0;
	contadorOtraCosa = 0;
	contadorMascotas = 0;
	contadorAnimalesEnfermosOInternados = 0;
	contadorMascotasAdoptadas = 0;
	contadorMascotasEnfermas = 0;
	contadorMascotasInternadas = 0;
	banderaHuboAnimalSinPelo = "no";
	banderaHuboGatosSinPelo = "no";
	acumuladorTempPerros = 0;
	acumuladorTempGatos = 0;
	acumuladorTempOtraCosa = 0;
	acumuladorPesoMascotasTotal = 0;

	for (i = 0; i < 3000; i++) {

		//variables correspondientes al bucle
		var tipoAnimal;
		var edadAnimal;
		var pesoAnimal;
		var tipoPelaje;
		var nombre;
		var raza;
		var estadoClinico;
		var temperaturaCorporal;

		//tipo
		tipoAnimal = prompt("Ingrese el tipo de animal", "gato/perro/otra cosa");
		tipoAnimal = tipoAnimal.toLowerCase();
		while (tipoAnimal != "gato" && tipoAnimal != "perro" && tipoAnimal != "otra cosa") {
			tipoAnimal = prompt("Ingrese un tipo de animal valido", "gato/perro/otra cosa");
			tipoAnimal = tipoAnimal.toLowerCase();
		}

		//edad
		edadAnimal = prompt("Ingrese la edad del animal");
		edadAnimal = parseInt(edadAnimal);
		while (isNaN(edadAnimal) || edadAnimal < 1 || edadAnimal > 20) {
			edadAnimal = prompt("Ingrese una edad valida");
			edadAnimal = parseInt(edadAnimal);
		}

		//pelaje
		tipoPelaje = prompt("Ingrese un pelaje valido", "corto, largo, sin pelo");
		tipoPelaje = tipoPelaje.toLowerCase();
		while (tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo") {
			tipoPelaje = prompt("Ingrese un pelaje valido", "corto, largo, sin pelo");
			tipoPelaje = tipoPelaje.toLowerCase();
		}

		//nombre
		nombre = prompt("Ingrese el nombre de su mascota", "solo una palabra")
		nombre = nombre.toLowerCase();
		var stringNombre;
		stringNombre = nombre;
		stringNombre = stringNombre.split(" ");
		var primeraPalabra;
		primeraPalabra = stringNombre[0];
		var esNombreNumero;
		esNombreNumero = parseInt(nombre);
		while (isNaN(esNombreNumero) == false || primeraPalabra.length != nombre.length) {
			nombre = prompt("Ingrese un nombre valido! solo una palabra", "solo una palabra")
			nombre = nombre.toLowerCase();
		}
		// raza
		raza = prompt("Ingrese una raza", "solo una palabra");
		raza = raza.toLowerCase();
		var stringNombreRaza;
		stringNombreRaza = raza;
		stringNombreRaza = stringNombreRaza.split(" ");
		var primeraPalabraRaza;
		primeraPalabraRaza = stringNombreRaza[0];
		var esRazaNumero;
		esRazaNumero = parseInt(raza);
		while (isNaN(esRazaNumero) == false || primeraPalabraRaza.length != raza.length) {
			raza = prompt("Ingrese una raza valida! solo una palabra", "solo una palabra")
			raza = raza.toLowerCase();
		}

		//peso
		pesoAnimal = prompt("Ingrese el peso del animal");
		pesoAnimal = parseInt(pesoAnimal);
		while (isNaN(pesoAnimal) || pesoAnimal < 1 || pesoAnimal > 200) {
			pesoAnimal = prompt("Ingrese un peso valido");
			pesoAnimal = parseInt(pesoAnimal);
		}
		acumuladorPesoMascotasTotal += pesoAnimal;

		//estado clinico
		estadoClinico = prompt("Ingrese el estado clinico", "enfermo, internado o adopcion");
		estadoClinico = estadoClinico.toLowerCase();
		while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion") {
			estadoClinico = prompt("Ingrese un estado clinico valido", "enfermo, internado o adopcion");
			estadoClinico = estadoClinico.toLowerCase();
		}

		//temperatura corporal
		temperaturaCorporal = prompt("Ingrese la temp corporal")
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal) || temperaturaCorporal < 20 && temperaturaCorporal > 50) {
			temperaturaCorporal = prompt("Ingrese una temperatura valida");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		//procesos sin pelo
		if (tipoPelaje == "sin pelo") {
			if (temperaturaCorporal < temperaturaAnimalSinPeloConMenorTemp || contadorMascotas == 0) {
				temperaturaAnimalSinPeloConMenorTemp = temperaturaCorporal;
				animalSinPeloConMenorTempCorp = tipoAnimal;
			}
			if (tipoAnimal = "gato") {
				if (pesoAnimal < pesoGatoMasLivianoSinPelo || contadorGatos == 0) {
					pesoGatoMasLivianoSinPelo = pesoAnimal;
					nombreGatoMasLivianoSinPelo = nombre;
					razaGatoMasLivianoSinPelo = raza;
				}
				banderaHuboGatosSinPelo = "si";
			}
			banderaHuboAnimalSinPelo = "si";
		}

		//procesos tipo
		switch (tipoAnimal) {
			case "perro":
				if (pesoAnimal > perroMasPesado || contadorPerros == 0) {
					perroMasPesado = pesoAnimal;
				}
				acumuladorTempPerros += temperaturaCorporal;
				contadorPerros++;
				break;
			case "gato":
				acumuladorTempGatos += temperaturaCorporal;
				contadorGatos++;
				break;
			case "otra cosa":
				acumuladorTempOtraCosa += temperaturaCorporal;
				ultimaMascotaTipoCosa = nombre;
				contadorOtraCosa++;
				break;
		}

		//procesos pelaje
		switch (estadoClinico) {
			case "adopcion":
				contadorMascotasAdoptadas++;
				break;
			case "enfermo":
				contadorMascotasEnfermas++;
				contadorAnimalesEnfermosOInternados++;
				break;
			case "internado":
				contadorMascotasInternadas++;
				contadorAnimalesEnfermosOInternados++;
				break;
		}

		//contador y respuesta para salir del bucle;
		contadorMascotas++;
		var respuesta;
		respuesta = prompt("Desea seguir cargando mascotas?", "si/no");
		respuesta = respuesta.toLowerCase();
		if (respuesta == "no") {
			break;
		}
	}

	//manejo de contadores en 0
	if (contadorPerros > 0) {
		tempPromedioPerros = acumuladorTempPerros / contadorPerros;
	}
	else {
		tempPromedioPerros = 0;
	}
	if (contadorGatos > 0) {
		tempPromedioGatos = acumuladorTempGatos / contadorGatos;
	}
	else {
		tempPromedioGatos = 0;
	}
	if (contadorOtraCosa > 0) {
		tempPromedioOtraCosa = acumuladorTempOtraCosa / contadorOtraCosa;
	}
	else {
		tempPromedioOtraCosa = 0;
	}

	//proceso de datos
	promedioPesoTotal = acumuladorPesoMascotasTotal / contadorMascotas;
	porcentajeAnimalesEnfermosOIntSobreTotal = (contadorAnimalesEnfermosOInternados / contadorMascotas) * 100;
	contadorPerrosYGatos = contadorPerros + contadorGatos;
	porcentajePerrosYGatosSobreTotal = (contadorPerrosYGatos / contadorMascotas) * 100;

	//comparacion de promedios
	if (tempPromedioPerros > tempPromedioGatos && tempPromedioPerros > tempPromedioOtraCosa) {
		tipoMascotaConMayorPromedioTempCorporal = "perros";
	}
	else {
		if (tempPromedioGatos > tempPromedioPerros && tempPromedioGatos > tempPromedioOtraCosa) {
			tipoMascotaConMayorPromedioTempCorporal = "gatos";
		}
		else {
			if (tempPromedioOtraCosa > tempPromedioPerros && tempPromedioOtraCosa > tempPromedioGatos) {
				tipoMascotaConMayorPromedioTempCorporal = "otra cosa";
			}
			else {
				tipoMascotaConMayorPromedioTempCorporal = "empate"
			}
		}
	}

	//muestra de resultados y validaciones
	if (contadorPerros > 0) {
		alert("El perro mas pesado fue de: " + perroMasPesado);
	}
	if (banderaHuboAnimalSinPelo == "si") {
		alert("El animal sin pelo con menor temperatura corporal: " + animalSinPeloConMenorTempCorp);
	}
	if (tipoMascotaConMayorPromedioTempCorporal != "empate") {
		alert("el tipo de mascota con mayor promedio de temperatura corporal es: " + tipoMascotaConMayorPromedioTempCorporal);
	}
	if (contadorAnimalesEnfermosOInternados > 0) {
		alert("porcentaje animales enfermos sobre el total: " + porcentajeAnimalesEnfermosOIntSobreTotal + "%");
	}
	if (contadorPerrosYGatos > 0) {
		alert("porcentaje de perros y gatos sobre el total: " + porcentajePerrosYGatosSobreTotal + "%");
	}
	if (contadorOtraCosa > 0) {
		alert("Ultima mascota tipo cosa: " + ultimaMascotaTipoCosa);
	}
	if (contadorMascotas > 0) {
		alert("El promedio de peso de las mascotas fue de: " + promedioPesoTotal);
	}
	if (banderaHuboGatosSinPelo == "si") {
		alert("El gato sin pelo mas liviano fue: " + nombreGatoMasLivianoSinPelo + " de raza: " + razaGatoMasLivianoSinPelo);
	}
}
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edadIngresada;
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;
	//1er PASO (ESTA MAL , POR QUE ESTA SEPARADO , TIENE QUE ESTAR CONCATENADO!!! MIRAR COMO QUEDA EN EL INDEX)
	alert("Usted se llama "+ nombreIngresado);
	alert("y tiene "+ edadIngresada + " años ")

	//2do PASO (HACER ALGO ASI YA QUE ESTA BIEN CONCATENADO Y ESO ES MUY IMPORTANTE)
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

	//alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");
}


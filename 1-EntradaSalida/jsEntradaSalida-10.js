/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeM;
	var descuentoM;
	var porcentajeM;

	importeM= txtIdImporte.value;
	importeM= parseInt(importeM);

	porcentajeM= importeM * 25/100;

	descuentoM= importeM - porcentajeM;


	//descuentoM = importeM * 0.75;//

	txtIdResultado.value=descuentoM;
}

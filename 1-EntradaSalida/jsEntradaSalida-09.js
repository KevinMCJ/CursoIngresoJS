/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoM;
	var aumentoM;

	sueldoM= txtIdSueldo.value;
	sueldoM= parseInt(sueldoM);

	aumentoM = sueldoM * 1.1;

	txtIdResultado.value=aumentoM;
}

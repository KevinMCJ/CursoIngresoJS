/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendoM;
	var divisorM;
	var resultado;

	dividendoM= txtIdNumeroDividendo.value;
	dividendoM= parseInt(dividendoM);
	divisorM= txtIdNumeroDivisor.value;
	divisorM= parseInt(divisorM);

	resultado= dividendoM%divisorM;
	
	alert("El resto es " + resultado);
}

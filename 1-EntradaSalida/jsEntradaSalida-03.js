/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	//nombreIngresado=document.getElementById('txtIdNombre').value;//ESTO ES LO MISMO QUE LA LINEA DE CODIGO DE ARRIBA , HAY 2 FORMAS , ESTA ES MENOS PRACTICA.
	alert("Su nombre es: " + nombreIngresado);
	//alert(nombreIngresado);

	//ERRORES
	//nombreIngresado=txtIdNombre; // SIN EL .VALUE APARECE.. [object HTMLInputElement] 

}



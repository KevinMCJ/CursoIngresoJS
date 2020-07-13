/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt("Ingresa tu nombre", "ACA VA TU NOMBRE")
	txtIdNombre.value=nombre; //ESTO ES LO MISMO QUE EN EL EJERCICIO 3 PERO ESCRITO AL REVEZ YA QUE EL ID ES UN CODIGO DE ENTRADA Y SALIDA O SEA SI IMPORTA CUANDO VA ANTES O DESPUES , NO COMO EL PROMPT X EJEMPLO
	//document.getElementById('txtIdNombre').value = nombre; //OTRA FORMA DE HACERLO PERO MEJOR USAR LA DE ARRIBA!
}


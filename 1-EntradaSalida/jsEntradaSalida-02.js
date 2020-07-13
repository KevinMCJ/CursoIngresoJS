/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre; //Se puede asignar una variable solo una unica vez
	nombre = prompt("Ingresa tu nombre", "ACA VA TU NOMBRE"); //Esta linea de codigo podemos escribirla junto a la de arriba o por separado como lo hice aca.
	alert("El nombre ingresado es: " + nombre); //Importante utilizar un espacio antes de cerrar comillas y el + para unir el texto con la var
	//alert(nombre);

	//TEST
	/*nombre= "Maria";
	alert(nombre);*/

	//ERRORES
	//nombre= Maria; //VARIABLE SIN DEFINIR
	//alert(Maria); //VARIABLE SIN DEFINIR
	//alert(Nombre); //VARIABLE SIN DEFINIR XQ LA VAR "NOMBRE" CON N MAYUSCULA NO FUE DEFINIDA
}


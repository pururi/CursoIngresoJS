/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;

	var numeroDos;

	numeroUno=parseInt(document.getElementById('numeroUno').value);

	numeroDos=parseInt(document.getElementById('numeroDos').value);

	alert("La suma es "+(numeroUno+numeroDos));
}

function restar()
{
	var numeroUno;

	var numeroDos;

	numeroUno=parseInt(document.getElementById('numeroUno').value);

	numeroDos=parseInt(document.getElementById('numeroDos').value);

	alert("La resta es "+(numeroUno-numeroDos));
}

function multiplicar()
{ 
	var numeroUno;

	var numeroDos;

	numeroUno=parseInt(document.getElementById('numeroUno').value);

	numeroDos=parseInt(document.getElementById('numeroDos').value);

	alert("La multiplicacion es "+(numeroUno*numeroDos));
}

function dividir()
{
	var numeroUno;

	var numeroDos;

	numeroUno=parseInt(document.getElementById('numeroUno').value);

	numeroDos=parseInt(document.getElementById('numeroDos').value);

	alert("La division es "+(numeroUno/numeroDos));
}


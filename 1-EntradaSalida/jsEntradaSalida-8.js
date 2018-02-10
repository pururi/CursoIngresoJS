/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var valorA;

    var valorB;

    var resultado;

    valorA=document.getElementById("numeroDividendo").Value

    valorB=document.getElementById("numeroDivisor").value

    valorA=parseInt(valorA);

    valorB=parseInt(valorB);

    resultado=valorA%valorB;
}

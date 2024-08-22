let contadoresDesaprobado = 0, contadorAprobado = 0, contadorPromocionado = 0;
let acumuladorDesaprobado = 0, acumuladorAprobado = 0, acumuladorPromocionado = 0;

//variable maximo y minimo de nota
let maxNota = 1, minNota = 10;
//pido una nota

do {
    //lo que repite
let nota = parseInt(prompt("Ingrese una nota 1 al 10"));

//empiezo a preguntar
if(nota < 4) {
//desaprobados
    contadoresDesaprobado ++;
    acumuladorDesaprobado += nota;
 
}
else{
    //aprobado
    contadorAprobado ++ ;
    acumuladorAprobado += nota;

//promiocionados
    if(nota >=7) {

    contadorPromocionado ++;
    acumuladorPromocionado += nota;
    }
}
//nota maxima y minima
if (nota >maxNota) {// guardo la mayor nota
    maxNota = nota
}
if (nota < minNota) {//guardo la menor nota
    minNota = nota
}

}while(confirm("otra nota?"));

//una vez cargada la nota saco promedio
alert(`Hubo ${contadoresDesaprobado} Alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobado/contadoresDesaprobado).toFixed(1)}`);

alert(`Hubo ${contadorAprobado} Alumnos aprobados y su nota promedio fue de ${(acumuladorAprobado/contadorAprobado).toFixed(1)}`);

alert(`Hubo ${contadorPromocionado} Alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionado/contadorPromocionado).toFixed(1)}`);

alert(`Nota minima del curso fue ${minNota}`);
alert(`Nota maxima del curso fue ${maxNota}`);
//pido datos por promt
let catergoria = parseInt( prompt("ingrese categoria(1, 2 o 3) para salario de usd 1000, 1500 y 2000"));
let subcategoria = prompt ("elige la subcategoria (A, B Y C) para multiplicadores de 1.5, 2 y 2.5");

//asigno sueldo segun categoria
let sueldo = 0
if(catergoria ==1){
    sueldo = 1000;
} else if(catergoria==2){
    sueldo = 1500;
}else if(catergoria==3){
    sueldo = 2000;
}
//multiplicador de acuerdo a la subcategoria
switch(subcategoria.toUpperCase()){
    case"A": sueldo = sueldo * 1.5;
    break;
    case"B": sueldo = sueldo  * 2;
    break;
    case"C": sueldo = sueldo * 2.5;
    break;
    default: sueldo = 0;
    break;
}
//informa dentro de rango de sueldo
if(sueldo>=1500 && sueldo<=3000){
    alert(`el sueldo de $${sueldo} es de rango inicial`);
}else if(sueldo >3000 && sueldo <=4000){
    alert(`el sueldo de $${sueldo} es de rango intermedio`);
}else if(sueldo > 4000){
    alert(`el sueldo de $${sueldo} es de rango avanzado`);
}
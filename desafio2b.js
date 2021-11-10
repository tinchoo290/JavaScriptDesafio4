let notas = [];
let i;
let nombre = prompt("Alumno, ingrese su NOMBRE y APELLIDO");

//SE LE PIDE LAS NOTAS AL USUARIO

for (i = 0; i < 3; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1), "1 AL 10")));
}
//SUMO LAS NOTAS
let suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});

//SACO EL PROMEDIO DE NOTAS
let promedio = (suma / (notas.length)).toFixed(1);

//VERIFICASMOS EL ESTADO DEL ALUIMNO.
let estado;
if (promedio >= 8.0) {
    estado = ("SU ESTADO DE SITUACION ES EXCELENTE");
} 
else if (promedio >= 4.0){
    estado = ("SU ESTADO DE SITUACION ES BUENO PERO PUEDE MEJORAR");
}
else {
    estado = ("NO LE ALCANZA, DEBERÁ RECURSAR");
}

//IMPRIMO LOS RESULTADOS EN PANTALLA Y MEDIANTE ALERT
document.write("Aumno: " + nombre + "<br>" + "Tus notas son: " + notas + "<br>" + "Tu Promedio es: " + promedio + "<br>" + "Estado: " + estado + "<br>");
alert(estado);
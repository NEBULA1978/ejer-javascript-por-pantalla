'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 < numero2) {
    numero1++;

    if (numero1 % 2 != 0) {
        // document.write("El " + numero1 + " es impar" + "<br/>");
        var texto = `
	    <h1>Hola que tal</h1>
	    <h3>El numero es: ${numero1} es impar</h3>
	    
`;
        document.write(texto);
    }
}
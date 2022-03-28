'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if (numero1 == numero2) {
    var texto = `
	<h1>Hola que tal</h1>
	<h3>LOS NUMEROS SON IGUALES : El numero1 es ${numero1} </h3> 
	<h4>LOS NUMEROS SON IGUALES : El numero2 es ${numero2} </h4>
    
	
    `;

    document.write(texto);

} else if (numero1 > numero2) {

    var texto2 = `
	<h1>Hola que tal</h1>
	<h3>EL NUMERO MAYOR ES: El numero1 es ${numero1} </h3> 
	<h4>EL NUMERO MENOR ES: El numero2 es ${numero2} </h4>
    
	
    `;
    // document.write("EL NUMERO MAYOR ES: " + numero1);
    // document.write("EL NUMERO MENOR ES: " + numero2);
    document.write(texto2);

} else if (numero2 > numero1) {
    var texto3 = `
	<h1>Hola que tal</h1>
	<h3>EL NUMERO MAYOR ES: El numero1 es ${numero2} </h3> 
	<h4>EL NUMERO MENOR ES: El numero2 es ${numero1} </h4>
    
	
    `;

    // document.write("EL NUMERO MAYOR ES: " + numero2);
    // document.write("EL NUMERO MENOR ES: " + numero1);
    document.write(texto3);

} else {
    document.write("INTRODUCE NUMEROS CORRECTOS");
}
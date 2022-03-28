'use strict'

/*
Que nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt('Introduce un numero', 0));

while (isNaN(number)) {
    number = parseInt(prompt('Introduce un numero', 0));
}

if (number % 2 == 0) {
    // document.write("Es un numero par");
    var texto = `
	    <h1>Hola que tal</h1>
	    <h3>Es un numero par es : ${number}</h3>
	   
`;
    document.write(texto);

} else {
    var texto2 = `
	    <h1>Hola que tal</h1>
	    <h3>Es impar : ${number}</h3>
	   
`;
    document.write(texto2);
    // document.write("Es impar" + "<br/>");
}
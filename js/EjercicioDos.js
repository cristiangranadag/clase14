let contador = 0;
let numeroMayor = 0;

// Leer
var num = Number(prompt('Ingrese el tamaño del vector'));

var NumeroEntero = new Array(num); //Objeto

for (let index = 0; index < NumeroEntero.length; index++){
    NumeroEntero[index] = Math.round( Math.random() * (25+1),1)
}

// Número mayor
for (let index = 0; index < NumeroEntero.length; index++){
    if(NumeroEntero[index]>numeroMayor){
        numeroMayor = NumeroEntero[index];
    }
}

// Cantidad Número mayor
for (let index = 0; index < NumeroEntero.length; index++){
    if(NumeroEntero[index]==numeroMayor){
        contador++;
    }
}
console.log("El número mayor es: "+numeroMayor)
console.log("El número mayor esta: "+contador)

// Imprimir
for (let index = 0; index < NumeroEntero.length; index++){
    document.write("El número es: "+NumeroEntero[index] + "</br>" )
}



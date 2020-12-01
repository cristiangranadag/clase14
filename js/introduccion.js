let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];

diaSemana.push("Lunes 2");
diaSemana.unshift("Domingo 2");

console.log("Tamaño vector: "+diaSemana.length);

for (let index=0; index<diaSemana.length; index++){
    document.write("<h1>"+"Dia semana "+diaSemana[index]+"</h1>")
}

diaSemana.pop();
diaSemana.shift();
diaSemana.sort();

diaSemana.toString();

console.log(diaSemana.indexOf('Lunes'))

document.write("Metodo forEach"+" <br>");
diaSemana.forEach(function(elemento) {
    document.write(elemento+"<br>");
});


document.write("<h1>"+"------------------"+"</h1>")
for (let index=0; index<diaSemana.length; index++){
    document.write("<h1>"+"Dia semana "+diaSemana[index]+"</h1>")
}

// Verificar si una variable es vector
let nombre = "Cristian"
console.log("Verificar vector: "+Array.isArray(diaSemana));
console.log("Cristian es vector? -"+    Array.isArray(nombre))

var fruta = ["Manzana","Pera","Uva"];
var colores = ["Rojo","Verde","Morado"];
var vector = []

vector = fruta.concat(colores);
console.log(vector);

for (let index = 0; index < fruta.length; index++) {
    document.write(fruta[index]+" es "+colores[index]+"<br>")   
}


var persona = ["Cristian", 28, true];
console.log(persona)

var miVector1 = new Array(10);
console.log(miVector1)


let animales = new Array(2);

// Leer
for (let index = 0; index < animales.length; index++) {
    let Animal = prompt('Ingrese un animal '+index);
    animales[index] = Animal;
}

// Imprimir
document.write("<h1>"+"----------------------------------"+"</h1>")
for (let index = 0; index < animales.length; index++) {
    document.write(index +"- "+ animales[index]+"<br>");
}
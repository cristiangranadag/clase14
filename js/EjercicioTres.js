// 3)	lea 10 números por teclado, 5 para un array y 5 para otro array distinto. Mostrar los 10 números en pantalla 
// mediante un solo array.

let numero = new Array();
let numero2 = new Array();
let numero3 = new Array();
let num;


for (let index = 0; index < 5; index++) {
    num = Number(prompt("Ingrese número: "))
    numero[index] = num
}

for (let index = 0; index < 5; index++) {
    num = Number(prompt("Ingrese número: "))
    numero2[index] = num
}

numero3 = numero.concat(numero2);           
console.log(numero3)

for (let index = 0; index < numero3.length; index++) {
    document.write(numero3[index]+", ")  
}


var array1 = ["1", "2", "3", "4", "5"];
var array2 = ["6", "7", "8", "9", "0"];
var array3 = []

array3 = array1.concat(array2);
console.log(array3);

document.write("<h1>"+"----------------------------------"+"</h1>")
for (let index = 0; index < array3.length; index++) {
    document.write(array3[index]+"<br>")  
}
console.log("Hola Mundo");

let weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado", "Domingo"]
console.log(weekDays);
console.log(weekDays[0]);
console.log(weekDays[weekDays.length - 1]);

console.log("EJEMPLO 2")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

console.log("RETO 1")
let fruits = ["apple", "banana", "orange", "peach", "grapes", "pear"]
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

console.log("RETO 2")
let negativeNum = [-5, -6, -7, -8, -9, -10, -11, -12, -13]
console.log(negativeNum[0]);
console.log(negativeNum[negativeNum.length-1]);

console.log("RETO 3")
for (let i= 167; i<= 349; i+= 24) {
    console.log(i);
}

console.log("RETO 4")
iterator = 167;
while (iterator<= 349) {
    console.log(iterator);
    iterator +=24;
}
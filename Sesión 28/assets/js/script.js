/*console.log("Hola Mundo");

console.log("Inicio de los mensajes")
console.log("Hola")
console.log("Chau")
console.log("8")
console.log("Fin de los mensajes")

function showMessages() {
    console.log("Inicio de los mensajes");
    console.log("Hola");
    console.log("Chau");
    console.log("8");
    console.log("Fin de los mensajes");
}

showMessages();
showMessages();
showMessages();

function addTwoNumbers() {
    let num1 = 14;
    let num2 = 4;
    let result = num1 + num2;

    console.log(`${num1} + ${num2} = ${result}`);
}

addTwoNumbers();


function addTwoNumbers(a, b) {
    let result = a + b;

    console.log(`${a} + ${b} = ${result}`);
}

let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));


addTwoNumbers(num1, num2);




function addTwoNumbers2() {
    let num11 = 17;
    let num12 = 7;
    let result = num11 + num12;
    let message = `${num11} + ${num12} = ${result}`;

    //Retorno de valores//
    return message;
}

let num11 = parseInt(prompt("Ingresa el primer número"));
let num12 = parseInt(prompt("Ingresa el segundo número"));

//Almacenando el valor de retorno
let resultMessage = addTwoNumbers2();
console.log(resultMessage);

// O lo puedes usar directamente
console.log(addTwoNumbers2()); */

let multiplyTwoNumbers = (a, b) => {
    let result = a*b;
    let message = `result: ${result}`

    return message;
}

let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let result = multiplyTwoNumbers(num1, num2);

console.log(result);

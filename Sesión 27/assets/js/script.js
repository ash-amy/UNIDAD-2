console.log("Hola Mundo");

console.log("RETO 1")
let name = "Dominick";
if (name.length > 7) {
    console.log("Que nombre tan largo tienes");
}


console.log("RETO 2")
let nombre = "Lily";
if (nombre.length < 5) {
    console.log("Que nombre tan corto tienes");
}


console.log("RETO 3")
let age = 19;
if (age >= 18) {
    console.log("Esta persona es mayor de edad");
} else {
    console.log("Esta persona es menor de edad");
}


console.log("RETO 4")
let num1 = 24;
let num2 = 18;
if (num1 > num2) {
    console.log("El primer número es el mayor.");
} else if (num1 < num2) {
    console.log("El segundo número es el mayor.");
} else {
    console.log("Ambos números son iguales.");
}


console.log("RETO 5")
let dayNumber = 7;
switch (dayNumber) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Lunes");
        break;

    case 3:
        console.log("Martes");
        break;

    case 4:
        console.log("Miércoles");
        break;

    case 5:
        console.log("Jueves");
        break;

    case 6:
        console.log("Viernes");
        break;

    case 7:
        console.log("Sábado");
        break;
    
    default:
        console.log("Valor no válido")
}
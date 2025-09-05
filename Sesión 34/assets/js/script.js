console.log("MÉTODOS DE ARRAYS");
//nombreArray.metodo()

let fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);

console.log("PUSH");
//push(x) -> Agrega el elemento x añ FINAL del array.
fruits.push("fresa");
console.log(fruits);

console.log("POP");
//pop() -> Elimina el ÚLTIMO elemento del array y lo retorna.
fruits.pop();
console.log(fruits);

console.log("UNSHIFT");
//unshift(x) -> Agrega el elemento x al INICIO del array.
fruits.unshift("uva");
console.log(fruits);

console.log("SHIFT");
//shift() -> Elimina el elemento x al INICIO del array y lo retorna.
let deletedItem = fruits.shift();
console.log(`Elemento eliminado con shift: ${deletedItem}`);
console.log(fruits);

console.log("INCLUDES");
//includes(x) -> Preguntar si x es un elementos del array. Retorna un booleano.
console.log(fruits.includes("naranja")); // true
console.log(fruits.includes("kiwi")); // false

console.log("INDEXOF");
// indexOf(x) -> Retorna el índice del elemento x en el arreglo. Si el arreglo no contiene el elemento, retorna -1
console.log(fruits.indexOf("naranja")); // 1
console.log(fruits.indexOf("kiwi")); // -1

console.log("JOIN");
//join() -> Toma todos los elementos del array y los junta en una string. Por defecto usa el carácter como (,) pero opcionalmente podemos indicar el carácter que queremos usar.
console.log(fruits.join());
console.log(fruits.join(", "));
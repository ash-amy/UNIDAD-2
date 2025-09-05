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

console.log("___________________________");
fruits = ["manzana", "naranja", "pera", "mango", "uva", "fresa"];
console.log(fruits);

console.log("SLICE");
// slice(inicio, fin) -> Retorna una COPIA del arreglo (NO MODIFICA EL ARREGLO ORIGINAL). Corta los elementos desde el índice "inicio". Opcionalmente se le piede indicar el índice de "fin", este índice es exclusivo. Si no se le indica el fin, por defecto corta hasta el final.

//Corta el arreglo desde el índice 2 hasta el final
console.log(fruits.slice(2));

//Corta el arreglo desde el índice 2 hasta el índice 5, sin tomar este último.
console.log(fruits.slice(2, 5));


// Métodos del objeto "document" para seleccionar elementos del DOM. Los elementos retornado pueden ser almacenados en variables.

// getElementById("nombre-id") -> Selecciona el elemento con el id "nombre-id".
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

//Acceder al contenido con el atributo "innerText". Este es un atributo de los objetos HTMLElement.
console.log(mainTitle.innerText);

//Actualizamod el contenido desde JS
mainTitle.innerText = "TÍTULO CAMBIADO";
console.log(mainTitle.innerText);

console.log("SELECCIÓN POR CLASE");
//getElementsByClassName("nombre-class") -> Selecciona todos los elementos con la misma clase, devuelve un array.
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);

//Al ser un arreglo, primero accedemos a uno de sus elementos
console.log(mainTexts[0].innerText);
console.log(mainTexts[2].innerText);

//Cambiando el contenido de uno de los elementos
mainTexts[1].innerText = "lorem";


console.log("SELECCIÓN POR ETIQUETA");
//getElementsByTagName("etiqueta") -> Selecciona todos los elementos de esa etiqueta, devuelve un array.
let titles = document.getElementsByTagName("h2");
console.log(titles);
console.log(titles[2].innerText);

console.log("SELECCIONAR POR SINTAXIS CSS - QUERY SELECTOR");
// querySelector("selector") -> Selecciona el primer elemento que coincida con el selector.
// querySelectorAll("selector") -> Selecciona todos los elementos que coincidan con el selector. Devuelve un arregle/array


// let mainTitle = document.getElementById("main-title");
let queryMinTitle = document.querySelector("#main-title");

// let mainTexts = document.getElementsByClassName("main-text");
let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

console.log("EVENTOS");
/* [Seleccionar elemento].addEvenListener("evento", funtion () {
        // Código de la función que se ve a ejecutar cuando suceda el evento
        // Es una función anónima, no tiene nombre
    })Para agregar eventos, no es necesario almacenar el elemento en una variable
*/
document.getElementById("clicker").addEventListener("click", function () {
    //Código de la función. Se ejecutará cuando se haga click en el elemento "clicker"
    console.log("Haz hecho click en el botón");
});

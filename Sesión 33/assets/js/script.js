// Métodos del objeto "document" para seleccionar elementos del DOM. Los elementos retornado pueden ser almacenados en variables.

// getElementById("nombre-id") -> Selecciona el elemento con el id "nombre-id".
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

//Acceder al contenido con el atributo "innerText"
console.log(mainTitle.innerText);

//Actualizamod rl contenido desde JS
mainTitle.innerText = "TÍTULO CAMBIADO";
console.log(mainTitle.innerText);
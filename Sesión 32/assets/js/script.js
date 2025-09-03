console.log("Hola Mundo");

class Person {
    //Atributos protegidps (encapsulamiento)
    //se nombre con un # adelante -> #nombreAtributo
    #cellphone;

    //Método constructor
    constructor(firstName, lastName, age, height, weight, id, cellphone) {
        //Inicializamos nuestros atributos
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.id = id;
        //Inicializamos el atributo protegido
        this.#cellphone = cellphone;
    }
    //Métodos personalizados
    sayhello() {
        console.log("Hola a todas, saludos desde el método de la clase Person");
    }

    //Usando atributos
    introduce() {
        return `Hola, soy ${this.firstName} ${this.lastName}, y tengo ${this.age} años.`
    }

    //Exponiendo un atributo protegido
    getCellphone() {
        return this.#cellphone;
    }
}

let person1 = new Person("Dominick", "Perales", 9, 1.3, 50, 67498221, "865497341");
console.log(person1)
console.log(person1.lastName);
console.log(person1.height);

console.log("RETO 1");
let person2 = new Person("Ashley", "Perales", 19, 1.60, 54, 71156173, "977758602");
console.log(person2)
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.height);
console.log(person2.weight);
console.log(person2.id);

console.log("MÉTODOS");
//Llamada a los métodos
person1.sayhello();
console.log(person1.introduce());
console.log(person1.getCellphone());

person2.sayhello();
console.log(person2.introduce());
console.log(person2.getCellphone());



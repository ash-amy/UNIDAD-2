console.log("Hola Mundo");

let person = {
    nombre: "Ashley",
    edad: 19,
    cellphone: "977758602",
    ID: 71156173,
};
console.log(person);
console.log(person.nombre);
console.log(person["edad"]);
console.log(person.cellphone);
console.log(person["dni"]);

person.hobbies = ["Leer", "Escribir", "Aprender idiomas"];
person.cellphone = "976348128";
console.log(person);

let person2 = { ...person };
person2.nombre = "Hasley";
person2.edad = 18;
console.log("PERSONA 2");
console.log(person2);

console.log("PERSONA 1");
console.log(person);




let heroes = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  // Madame uppercut
  // Superhuan reflexes
  // Interdimansional travel

  console.log("RETO 1")

  console.log(heroes.members[1].name)
  console.log(heroes.members[1].powers[2])
  console.log(heroes.members[2].powers[4])


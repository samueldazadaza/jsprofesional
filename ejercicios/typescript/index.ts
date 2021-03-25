// console.log('Hello, TypesScript');

// function add(a: number, b: number) {
//     return a + b;
// }

// const sum = add(2, 3)
//*******************

//boolean
let muted: boolean = true;
muted = false;
muted = "hellostring";

//numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//string
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("9000")

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9001);

// Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: 'WildCard'};

// Object
let someObject: object = { type: 'Wilcard' };

// VIDEO 26 ------------ FUNCIONES
//FUNCIONES
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6)

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6);

function fullName (firstName: string, lastName: string = "Smith"): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Agente:');
console.log(richard);










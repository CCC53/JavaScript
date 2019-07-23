//variables
// let, const var fue usada desde el inicio de js pero ya no se usa; let te permite reasiginar valores
let edad = 18;
console.log(edad);
edad = 22;
console.log(edad);
const score = 22;
console.log(score);

//tipo de datos
//Cadena, Numero, Booleano, Nulo, Indefinido
const name = 'Carlos Calette';
const edad = 18;
const rating = 4.5;
const chido = true;
const x = null;
const y = undefined;
let z;
console.log(typeof z);

//Cadenas
const name = 'Carlos Calette';
const edad = 18;
//Template String
const Hola = `Mi nombre es ${name} y tengo ${edad} años de edad`;
console.log(Hola);

//Metodos de cadena
const s = 'Hola Mundo';
const x = 'Penny, Pancho, Hatchi, Maximo'
    //Longitud de cadena
console.log(s.length);
//Todo a mayus
console.log(s.toUpperCase());
//Todo a minus
console.log(s.toLowerCase());
//Subcadena
console.log(s.substring(5, 10));
//Convertir a lista letra por letra
console.log(s.split(''));
//Convertir a lista una serie de palabras en una sola cadena
console.log(x.split(', '));

//Entrada de datos por teclado
let nombre = prompt('Ingrese su nombre: ');
console.log(`Su nombre es ${nombre}`)

//Arreglos -variables que contienen valores múltiples
//Constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
//
const frutas = ['mango', 'sandia', 'naranja', 'cereza', 10, true];
//Añadir un valor al arreglo sabiendo su posicion pero no es la mejor manera de hacerlo
frutas[6] = 5.5
    //Añadir un valor al final con el metodo push
frutas.push('Penny')
    //Añadir un dato al inicio del arreglo con el metodo unshift
frutas.unshift(false);
//Eliminar el ultimo dato del arreglo
frutas.pop();
console.log(frutas);
//Verificar si algo es un arreglo
console.log(Array.isArray(frutas));
//Obtener la posicion de un dato
console.log(frutas.indexOf(true));

//Object Literals
/*Los objetos literales son básicamente pares de valores clave.
y también podemos incrustar objetos para que podamos poner un objeto dentro de un objeto*/
const person = {
    nombre: 'Carlos',
    apellido: 'Calette',
    edad: 18,
    hobbies: ['musica', 'youtube', 'gaming'],
    direccion: {
        calle: 'Niños Heroes No.1',
        estado: 'Mexico',
        municipio: 'Atenco',
    }
}
console.log(person.nombre, person.apellido);
console.log(person.hobbies[1]);
console.log(person.direccion.estado);
//Descomponer un objecto
const { nombre, apellido } = person;
console.log(nombre);
//Descomponer un objeto incustado
const { direccion: { estado } } = person;
console.log(estado);
//Añadir un dato
person.email = 'carloscalette@gmail.com';
console.log(person);

//Arreglos de objetos
const todos = [{
        id: 1,
        text: 'Terminaste los deberes',
        terminada: true
    },
    {
        id: 2,
        text: 'Terminaste con ella',
        terminada: false
    },
    {
        id: 3,
        text: 'Terminaste de comer',
        terminada: true
    },
];
console.log(todos);
//Imprimir un dato en particular
console.log(todos[1].text);

//JSON
//convertir arreglo de objetos a JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//Bucles
//For
for (let i = 0; i <= 10; i++) {
    console.log(`Cuenta ${i} del Bucle For`);
}
//Bucles con arreglos
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
for (let todo of todos) {
    console.log(todo.text);
}
//While
let i = 0;
while (i <= 10) {
    console.log(`Cuenta ${i} del Bucle While`);
    i++;
}

//Métodos de matriz de alto orden
/*También tenemos lo que se llama métodos de matriz de alto orden,
que es la forma en que sugeriría hacer cualquier tipo de iteración con matrices.*/
//forEach: solo es para retornar un dato especifico
todos.forEach(function(todo) {
    console.log(todo.terminada);
});
//map regresa datos especificos en un arreglo diferente
const Todotext = todos.map(function(todo) {
    return todo.text;
});
console.log(Todotext);
//Filter regresa datos especifos en un nuevo arreglo de acuerdo a una condicion
const Todocomplete = todos.filter(function(todo) {
    return todo.terminada === false;
});
console.log(Todocomplete);
//Filter and map
const Todocomplete2 = todos.filter(function(todo) {
    return todo.terminada === false;
}).map(function(todo) {
    return todo.text;
});
console.log(Todocomplete2);

//Condicionales
//Usar '==' no toma en cuenta el tipo de dato, si son iguales sera verdad sin importar el tipo de dato
const x = 1;
if (x == 10) {
    console.log('x es igual a 10 en numero o string');
}
//si se usan '===' ya se tomara en cuenta el tipo de dato y solo sera verdad si son iguales y si son
//el mismo tipo de dato
if (x === 10) {
    console.log('x es igual a 10');
} else if (x > 10) {
    console.log('x es mayor a 10');
} else {
    console.log('x no es mayor a 10')
}
//And(&&) y Or(||)
const a = 8;
const b = 11;
if (a > 6 && b > 10) {
    console.log('a es mayor que 6 y b es mayor o igual a 10');
}
//Operador Ternario
//?=then() :=else
const k = 10;
const color = k > 10 ? 'rojo' : 'azul';
console.log(color);
//switch
switch (color) {
    case 'azul':
        console.log('El color es azul');
        break;
    case 'rojo':
        console.log('El color es rojo');
        break;
    default:
        console.log('No es ninguno de esos dos');
        break;
}

//Funciones
function addNum(n1, n2) {
    console.log(n1 + n2);
}
addNum(2, 2);
//Arrow functions
const numbers = (n3, n4) => {
    return n3 + n4;
}
console.log(numbers(4, 5));
//Si queremos imprimir algo 
const number = (n3, n4) => console.log(n3 + n4);
number(4, 5);
//Si solo es retornar algo sin llaves
const numbe = (n3, n4) => n3 + n4;
console.log(numbe(4, 5));
//Si solo tenemos un parametro
const numb = n3 => n3 + 6;
console.log(numb(4));

//Objetos
//Creacion de objetos con constructor con prototipos
//Funcion de Constructor
function Person(nombre, apellido, cumple) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cumple = new Date(cumple);
}
Person.prototype.getAño = function() {
    return this.cumple.getFullYear();
}
Person.prototype.getNombre = function() {
    return `${this.nombre} ${this.apellido}`;
}

//Instanciar objeto
const person1 = new Person('Carlos', 'Calette', '05/03/01');
const person2 = new Person('Karen', 'Martinez', '23/09/01');
console.log(person1);
console.log(person2.getNombre());

//Creacion de objetos con ES6 classes
class Person {
    constructor(nombre, apellido, cumple) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cumple = new Date(cumple);
    }
    getAño() {
        return this.cumple.getFullYear();
    }
    getNombre() {
        return `${this.nombre} ${this.apellido}`;
    }
}

//Instanciar objeto
const person1 = new Person('Carlos', 'Calette', '05/03/01');
const person2 = new Person('Karen', 'Martinez', '23/09/01');
console.log(person1);
console.log(person2.getNombre());
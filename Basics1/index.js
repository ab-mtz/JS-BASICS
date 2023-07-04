// Comment
//console.log('Hello, world')

let name = 'Hector';

console.log(name)

// Cannot be a reserved keyword
// Should be meaningful and descriptive
// They cannot start with a number
// Cannot contain a space or hyphen(-)
// Variables names are case-sensitive
// let firstName, lastName (NOT INITIALIZED can go in the same line)

let person = {
    name: 'peter',
    age: 30
};
console.log(person)
person.age = 35;
console.log(person)

// A way use a property to modify object
let selection = 'name';
person[selection] = 'pedro';

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[2] = 'green';
console.log(selectedColors)
console.log(selectedColors.length)

// Functions
function greet(name, lastName) //to add parameters add ,
{
    console.log('Hello ' + name + ' ' + lastName); //concatenating variable
}

greet('John', 'Smith')
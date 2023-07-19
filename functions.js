// Functions: Reusable procedures, help to modular code

// Definition

function nameFunc() {
    console.log("something")
}

// Execution (calling)

nameFunc()

// Function with arguments

let arg1 = 2 + 3;
let arg2 = 2;
function func2 (arg1, arg2) {
    console.log("Score: ${arg1}");
    console.log("Time: ${arg2}min");
    return arg1*arg2;
}

// Function Expressions
    // JS considers functions like values, the same way as objects, or variables. 
const square = function (num) {
    return num*num;
}

console.log(square(7)

// Higher Order Functions
    // Are functions that operates on /with  other functions. Accept other functions as arguments o rreturn a function.

function1(function2)  //Calling a function inside another: f1 takes f2 as an argument

function1(function2())  // f1 takes the return value of the f2 as the argument


//The next function returns a boolean value depending of the conditional stated on return line

function isBetween(num) {
    return num >= 50 && num <= 100
}

// Factory Function: Using the example above, we can "create" functions storing them into variables that operates with certain values as arguments that we can use later
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
 }

 const isChild = makeBetweenFunc(0,18)
 const isAdult = makeBetweenFunc(19,64)
 const isSenior = makeBetweenFunc(65, 120)

 

 //Adding methods to objects.
    // every method is a Function, but not every function is a method
    // We can add functions as prperties on objects. We call them Methods.

    const myMath =  {
        PI: 3.1416,
        square: function (num) {
            return num*num;  
        }
        cube: function (num) {
            return num **3;
        }
    }

    const newVariable = myMath.cube(2)
    //Another way to write that is the next:
    const myMath = {
        PI: 3.1416,
        square(num) {
            return num*num;
        },
        cube(num) {
            return num **3;
        }
    }

    const hen = {
        name: Helen,
        eggCount: 0 ,
        layAnEgg() {
            this.eggCount ++;  //This refeers to the object itself, in this case hen.eggCount
            return "EEG"
        }
    }


    // Try/Catch: helps to handle unexpected results, for example connecting to an API

    try {
        do.something
    } catch {
        console.log("Error") //We handle the error case here
    }


//ARROW Functions 
    // Syntactically compact alternative to a regular function expression

const square = (x) => {  //If is only one argument we can omit parenthesis
    return x * x;
}

//

const rollDie = () => { // If the functions takes no arguments than we have to put parenthesis
    return Math.random;
}

// With arrow functions we can use Implicit Returns: Only work where theres only one value fucnt

const square = x => (
    x * x
);
// OR
const square = x => x * x;

    // example

    const newMovies = movies.map(function (movie) {
        return `${movie.title} - ${movie.score / 10}`
    })

    //or

    const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))

//Default Params
    // gives the posibility to set default parameters in a function so in case a param is not specified (for example by user)
    // It will execute with a default one.
    function rollDie(numSides = 6) {
        return Math.floor(Math.random() * numSides) +1
    }

    function greet(msg, person) {
        console.log(`${msg}, ${person}`)
    }
    function greet(person, msg="Hello") {   //Params should be passed as second argument an ahead, not as a first one
        console.log(`${msg}, ${person}`)
    }

// SPREAD
    //If we have an array like this
    const nums = [1,4,2,5,7,5,4,8,9,1233]
    //And we want to run a method like
    Math.max(nums) //we´ll have an error because the method expects 1 argument (or separete) an the arary is not that
    //Then, using the spread method (...)
    Math.max(...nums) //Will execute the method spreading the array in separate arguments
    //It can spread a string in to each character

    // Other use is to create a copy of an array (and not the direction in memory) and combine arrays
    const cats = ['salsa', 'panela', 'shoshana']
    const dogs = ['samao', 'kali', 'oso', 'sleeping']

    const allPets = [...cats]   //

    const allPets = [...cats, ...dogs]

    //Spread with objects literals  to copy propertie objects into new objects

    {...object1, ...object2}  //Combines objects properties into a new object with all the properties
    //When both objects have properties with the same name(conflict), the second one will have preference
    {...object1, ...object2, property: value} //We can add new properties manually
    
    {...[2, 4, 6, 8]} // This will give us {0:2, 1:4, 2:6, 3: 8}
     
// Rest parameters: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
    function raceResults(gold, silver, ...everyoneElse) {
        console.log(`Gold medal goes to: ${gold}`)
        console.log(`Silver medal goes to: ${silver}`)
        console.log(`And thaks to everyone else: ${everyoneElse}`)
    }



    
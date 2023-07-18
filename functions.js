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





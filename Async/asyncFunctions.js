//The Call Stack 
// Last thing in - first out

// What's Async

console.log("I print first")
setTimeout(() = => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I print second");


//Example API callback

searchMoviesAPI('amadeus', () => {
    saveToDB(movies, ()=> {
        //If it works, run this code:
    },() => {
        //if doesn't work, run This: 
    })
},() => {

}) //This callback hell can be problematic when there are big nesting


// Promises: ojects that represent the eventual completion or failure of an asynchronous operation
// Used when we request data from an API where there are potential delays or errors



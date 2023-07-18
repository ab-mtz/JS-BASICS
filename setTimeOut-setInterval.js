
console.log("Hello")
//Will delay the execution of the function for a given time
setTimeout(() => {
    console.log("...late")
}, 3000) //Miliseconds

console.log("Goodbye")

// Interval: Will execute the inner function at given interval

const id = setInterval(() =>{
    console.log(Math.random())
}, 2000)
// We need an stoping
clearInterval(id)   

fetch("https://swapi.dev/api/people/1/")

.then((res) => {
    console.log("Resolved", res)
    // res.json().then((data) => {console.log(data)}) //We need to add this method (that returns a promise) because teh fist resolves at recive heades, and we want to get the body too
    return res.json();
})
.then((data) => {
    console.log(data); //Refactored
    return fetch("https://swapi.dev/api/people/2"); //We add this line to add a new request
})
.then((res) => {
    console.log("Second request resolved")
    return res.json();
})
.then((data) => {
    console.log(data);
})

.catch((e) => {
    console.log("Error", e)
})

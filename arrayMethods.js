// For each

const nums = [9, 8 , 7, 6, 5]

nums.forEach(function(n) {
    console.log(n*n)
    // prints: 81 * 64 * 49, 36, 25
});

nums.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el)
        //prints: 8, 6
    }
});
// The method is not that used these days because of "for of"

// The Map Method: creates a new array with the results of calling a callback on every element in the array

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
})
texts; //['rofl', 'lol', 'omg', 'ttyl'];
caps; // ['ROFL', BALBLABLALBA]
// We could use .map to create a copy of a list of dictionaries and take only some position value 


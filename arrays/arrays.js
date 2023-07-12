let array = ['pepe', 'jorge']

// .push - add to end
array.push('tito'); // ['pepe', 'jorge', 'tito']


// .pop - remove from end
array.pop(); // ['pepe', 'jorge']

// .shift - remove from start
array.pshift(); // ['jorge']

// .unshift - add to start
array.unshift('pepe'); // ['pepe', 'jorge']



// .concat - merge two different lists into a single one
let array = ['pepe', 'jorge']
let array2 = ['verde', 'rojo']

array3.concat(array2) // array3 = ['pepe', 'jorge', 'verde', 'rojo']

// .include let us know if some value is in the array
array.includes('pepe')  // = true

// .indexOf - returns the index where a character apears
"pepe".indexOf('e')  // = 1
array3.indexOf('verde')  // = 2 

//.reverse it reverses an array, change the original
array.reverse() // = ['jorge', 'pepe']

// .slice - create a copy of a part of the array
let array4 = array3.slice(2) // array4 = ['verde', 'rojo']
let array5 = array3.slice(0,2) // array3 = ['pepe', 'jorge', 'verde']

// .splice - 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb')  // ['Jan', 'Feb', 'March', 'April', 'June'];
// .splice( Inserts at index 1, delete 0 elements, value to insert) 

months.splice(3, 1,) //  ['Jan', 'Feb', 'March',  'June'];

// .sort - sorts array, good for strings, not for numbers

// Arrays are mutable. The name of the array points to a memory location that make not possible to
// compare two different arrays cause we would be comparing memory adresses, no the values. 
// When we make a copy of an array, the copy is a dereference of the address of the first array. 
// If we modify "the copy" we're afecting the values stored in the original address


//      MULTIDIMENSIONAL ARRAYS

const colors = [
    ['red', 'blue']
    ['yellow', 'gren']
    ['black', 'white']
]

 
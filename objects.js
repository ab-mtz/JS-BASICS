// Objects are collections of properties. 
// Properties are a key-value pair
// Rather than accessing data using an index, we use custom keys

// Declaration
const object = { key1: 'value1', key2: 'vaulue2' };

// Accessing to values 

object['key1']  // "value1"

object.key1 // "value"   using method

// All keys are stored as strings
const years = {
    1999 = 'good',
    2020 = 'bad'
};

let birthYear = 1999;
// We can evaluate our variable above, with the value-pairs in our object trhough the next syntaxis
years[birthYear] // = "good"

// Changing value inside an object 
years.1999 = 'bad';

years['1999'] = 'good';

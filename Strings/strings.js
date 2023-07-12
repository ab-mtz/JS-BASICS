let string1 = "Hello"
let string2 = "World"
console.log(string1 + string2)  //Concatenation

// Some String Methods
console.log(string1.length)

string1.trim // eliminates extra spaces at the begining or end of string

string1.trim().toUpperCase //Two (or more) Methods simultaneusly applied

// Methods that use arguments

strin1.indexOf('cat'); //Tells the index where the string in the argument appears

string1.slice(beginIndex[, endIndex]) //Extracts a part of the string starting at specified Index and, optionally, till some specific inex
                                        // is possible to use -n start counting from end to start
string1.replace('replaced', 'newWord')

//Template literals: strings that allow embedded expresions, wich will be evaluated and then turned into a resulting string 
`I counted ${1 + 2 + 3}` //Content inside curly braces will be evaluated and we'll se result. We can embed Variables inside

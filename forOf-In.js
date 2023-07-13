// A different way of loops, recently introduced. Not soported in InternetExplorer

const names = ['luis', 'pedro', 'pepe', 'jorge']

for (let name of names) {
    console.log(name)
}

// It works kind of python syntaxis (For book in books)


// Iterating in an array of arrays
const names = [
    ['luis', 'pedro', 'pepe', 'jorge']
    ['luis', 'pedro', 'pepe', 'jorge']
    ['luis', 'pedro', 'pepe', 'jorge']
]

for (let row of names) {
    for (let name of row) {
        console.log(name)
    }
}

// Iterating trough a string
const string = "Hello, world"
for (let char of string){
    console.log(let)
}

// Iterating in objects: "for of", won't work in an object, but insted "for in" will

const testScores = {
    keenan: 80, 
    damon: 67,
    kim: 89,
    shawn: 12
}

for (let person in testScores) {
    console.log(person); 
}       // This loop will give usthe key contained in the object


// With the key we can access to the value just using testScores[person[]
for (let person in testScores) {
    console.log(${person} scored ${testScores[person]}); 
}

// Another way to acces the keys is trough a method
Object.keys(testScores) //This will return an array containing the keys
Object.values(testScores) //This will return an array containging the values 
Object.entries (testScores) // Thiss will return a nested array of key-value pairs
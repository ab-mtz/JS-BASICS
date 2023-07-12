let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * 10 ) + 1 ;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attemps = 1;

while(guess !== targetNum) {
    if(guess === 'q') break;

    attemps++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter new guess:"));
    }
    else {
        guess = parseInt(prompt("Too low! Enter new guess:"));
       
    }
}
if (guess==='q') {
    console.log("You quitted")
}
else {
console.log("You got it, it took you ${attemps} guesses");
}
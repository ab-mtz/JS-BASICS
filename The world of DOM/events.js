// clicks, drag, frop, hover, scrill, form submission, key press, focus/blur, mouse wheel, double click, copying, pasting, audo start, screen resize, printing

// clicks

const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('you clicked me')
}

function scream (){
    console.log ('scream')
}

btn.onmouseenter = scream;

//Add event listener

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
    console.log('buton 2')
}) //Allows to call two different functions simultaneusly
// The go to 

//EVENT OBJECT

document.querySelector('button').addEventListener('click', function (evt) {
    alert("Click")
    console.log(evt) // the event passes like an object and has properties
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (event) {
    console.log(event.key)  //Will print property: 
    console.log(event.code) // Will print property: KEYDOWN
})
// input.addEventListener('keyup', function () {
//     console.log("keyup")
// })

//For exemple to a game where you need the event listener not for an input
//Event handler

window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'ArrowUp':
            console.log("Move up!");
            break;
        case 'ArrowDown':
            console.log("Move down!");
            break;
        case 'ArrowLeft':
            console.log("Move left!");
            break;
        case 'ArrowRight':
            console.log("Move Right!");
            break;
        default:
            console.log("Ignored");
    }
})

//FORM EVENTS & PREVENT DEFAULT 

const form = document.querySelector('#shelterForm')
form.addEventListener("submit", function (event) {
    console.log("submited")
})
//In This way, the default beheivour of forms is to refresh the page
//In order to avoid that we use:

const form = document.querySelector('#shelterForm')
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submited");
})
//We can use for a single page app

//Example storing values into a list from input field preventing refresh of form
const form = document.querySelector('#shelterForm');
const input = document.querySelector("catName");
const list = document.querySelector("#list");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(input.value);
    const catName  = input.value;
    const newLi = document.createElement("LI");
    newLi.innerText(newLi);
    list.append(newLi);

})

//CHANGE EVENT

const input = document.querySelector('input');

input.addEventListener('change', function (event) {
    console.log("Change of value of input field")
}) //Will triggers when we leave the input field with a new value in it

//INPUT EVENT
input.addEventListener('input', function (event) {
    console.log("Change of value of input field")
}) //After every new type

//EVENT BUBBLING
// Event nested can bubble up and trigger other events
button.addEventListener('click', function (event) {
    event.stopPropagation(); //With this we stop the bubbling effect
})

// EVENT DELEGATION
// Some action made for an existing html element can stop applying to new elements
// We can apply the paren of elements

const ul = document.querySelector('ul')
ul.addEventListener('click', function (e) {
    console.log("Click on ul");
    console.log(e.target);  //We we'll se the property targe wich li was clicked
    e.target.remove(); 
    //e.target.nodeName === 'LI' && e.target.remove();
})
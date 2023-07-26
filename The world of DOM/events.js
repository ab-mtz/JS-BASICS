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

window.addEventListener('keydown', function (event) {
    console.log(event.key)
    console.log('Move down')
})

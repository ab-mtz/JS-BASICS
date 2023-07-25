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

 

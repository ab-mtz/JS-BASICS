// DOM: Document Object Model
    // Is a JS representation of a webpage.
    // The JS 'window' into the contents of a webpage
    // Bunch of objects that you can interact with via JS


// SELECT VS MANIPULATE

    // Select: Fetch me the object that represents some element ont the page
    document.getElementById  //This just selects an specific element

    document.getElementsByTagName // selects all the tags of one kind
    const images = document.getElementsByTagName('img') // HTML collection, looks like an array
    images[0] //It's coolection of objects, and we access them with array like syntaxis
    // We can use for of, it's an iterable collection
    
    document.getElementsByClassName('square') 
    //we select by class defined in css


// querySelector
    // newer all-in-one method to select a single element. Just give us the first match 

    document.querySelector('p') // Select by tag
    document.querySelector('#banner') //Select by ID
    document.querySelector('.square') //Select by class
    document.querySelector('a[title="java"]') //Select by type and attribute
    document.querySelectorAll('p') //Returns a collection of all matchs 

//textContent: retrieves all the text contained
document.querySelector('p').textContent
// innerText: retreves the text that is showing in the moment (Will omit hidding classes or so)
document.querySelector('p').innerText
//innerHTMl: retrieves all the content including the tags
document.querySelector('p').innerHTML

// Styles changing

    // .style.color  contains in-line defined styles NOT that recommended and we can affect one a the time
    h1.style.fontSize = '2px solid pink'

    const allLinks = document.querySelectorAll('a');

    for (let link of allLinks) {
        link.style.color = 'white';
    }

    // We can get a value, for example fontSize applyed to an H1
    // Get the current values
    window.getComputedStyle(h1).fontSize //= 32px

// Class Lists
const h2 = document.querySelector('input')
input.getAttribute('class')
input.setAttribute('class', 'purple')

// To add a class to the current classes we do:
let currentClases = input.getAttribute('class')
input.setAttribute('class', `${currentClasess} purple`)

input.classList // give us a list of classes, and some methods like add or remove or toggle
//contains tell us if a class is contained or not, returns a boolean

input.parentElement. // retunrs the upper element 

const input = div.parentElement
input.children  //returns iterable object that contains the childrens conained in the object

//previous sibiling next sibiling
const squareImb = document.querySelector('.square')
squareImb.nextSibling // give us a node
squareImb.nextElementSibling //give us the next element sibiling. Previous



// CREATING A NEW DOM ELEMENT WITH JS

const newImg = document.createElement('img') //Type of element
newImg.src = 'URL'                      //Here we define the source of the image
document.body.appendChild(newImg)       //Here we append the object to some parent
newImg.classList.add('square')          //We apply a class

const newH3 = document.createElement('h3')
newH3.innerHTML = 'New text'
document.body.appendChild(newH3)

// append node

p.append('new text ')  //append it to the other p element

// preppend. works with few some navegator
p.preppend('text') 

// adjacent

Element.insertAdjacementElement('afterend', h2) //Parameters: beforebegin or afterend

// removeChild from an element
//We need to select the parent and then remove child, so we call the parent
const fistLi = document.querySelector('li')
const ul = document.querySelector('ul')
ul.removeChild('li')

// recently we use
const img = document.querySelector('img')
img.remove()



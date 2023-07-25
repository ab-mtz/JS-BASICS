const btnClick = document.querySelector('button')
const bckgrd = document.querySelector('body')
const h1text = document.querySelector('h1')


btnClick.addEventListener ( 'click' , () => {
    console.log("Generate random color")
    console.log(randomNumber())
    h1text.innerText = ("Here are new colors!")
    h1text.style.color = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber()+')';
    btnClick.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber()+')';
    btnClick.style.color = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber()+')';
    bckgrd.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber()+')';
})

const randomNumber = ()=> {
    return Math.floor(Math.random()*255)+1;
}

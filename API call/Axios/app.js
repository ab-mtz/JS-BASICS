// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch(e){
//         console.log("Error", e)
//     }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10); 

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')
button.addEventListener('click', () => {
    getDadJoke();
})

const getDadJoke = async () => {
    const config = { headers: { Accept :'application/json' } }
    const res = await axios.get ('https://icanhazdadjoke.com/', config) 
    console.log(res.data.joke)
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI)
}
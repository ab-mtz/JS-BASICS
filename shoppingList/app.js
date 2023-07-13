// Create variables
let list = ['tomate', 'onion' , 'apples', 'fish'];

// inside infinite loop 

let instruction = prompt("What do you like to do?");

while (instruction !== 'quit') {

    // Check for a valid instruction
        //if list
    if (instruction === 'list') {
        //printlist
        console.log("****************");
        for (let counter = 0; counter  < list.length; counter++) {
            console.log(counter + ": " + list[counter]);
        }
        console.log("****************");
    }
    // else if new
    else if (instruction === 'new') {
            // prompt for item
        let newItem = prompt("What item do you want to add?");
        // add to list
        list.push(newItem);
        console.log(newItem + " added to list");
    }
    // else if delete 
    else if (instruction === 'delete') {        
        // prompt for index to delete
        let indexItem = prompt("Type the index of the item that you want to delete");
        //delete from list
        console.log(list[indexItem] + " deleted from list");
        list.splice(indexItem, 1);
    }
    
    else if (instruction === 'quit'){
        break;
    }    
    instruction = prompt("What do you like to do?");

}
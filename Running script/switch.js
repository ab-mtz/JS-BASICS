const day = 2;

switch (day) {
    case 1: 
        console.log("Monday");
        break;                      
    case 2: 
        console.log("Tuesday");  // In this example the switch will be activated on case 2 
        break;                   // the break statement ensures that the next cases are not executed
    case 3: 
        console.log("Wendsday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    default:
        console.log("Default behaivour");
}
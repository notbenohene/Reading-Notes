'use strict'

let name = 'Ben'; // let name = prompt('What is your name?');
//let age = 30; // let age = prompt('What age are you?');
let isHere = true; // let

let age = prompt('What age are you?');
if (age > 30) { 
    alert('Keep doing it!'); 
    } 

if (isHere) {
    alert('Same')
} else {
    alert ('Where you at?');
}

let foodPreference = prompt('What is your fav food?');
switch(foodPreference.toLowerCase){ //"normalizing" user input to all lowercase characters so that their answer matches what is coded
    case 'sandwich':
        alert('I like sandwiches.');
        break;
    case 'chicken':
        alert('Real chicken eaters only.');
        break;
    case 'salad':
        alert('You hungry?');
    default:
        alert('You eat that?');
}
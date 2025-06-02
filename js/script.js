"use strict";

// if (4 == 9) {
//     console.log("Okay");
// }
// else {
//     console.log("Bad");
// }



// if (num < 51) {
//     console.log("Число меньше 51");
// } else if (num > 100) {
//     console.log("Число больше 100");
// } else {
//     console.log("Okay");
// }

// (num === 50) ? console.log("Ok") : console.log("Error");

const num = '50';

switch (num) {
    case '49':
        console.log("Not true");
        break;
    case '100':
        console.log("not true");
        break;
    case '50':
        console.log('True');
        break;
    default:
        console.log("Not today");
        break;
}
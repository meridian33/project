// const hamburger = false;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Im full');
// } else if (hamburger) {
//     console.log("Im 75% full");
// } else if (fries) {
//     console.log("im 25% full");
// } else {
//     console.log("im hungry");
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log((hamburger === 3 && cola && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "qfqwefqf");

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Everyones glad");
// } else {
//     console.log("Everyones goes to another establishment");
// }


const hamburger = 3;
const fries = 2;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 2 && nuggets) {
    console.log("Everyones glad");
} else {
    console.log("Everyones goes to another establishment");
}

console.log(hamburger === 3 && cola === 2 || fries === 2 && nuggets);

let fierstReport, secondReport, thirdReport, fourthReport = 'done';

console.log(fierstReport || secondReport || thirdReport || fourthReport);

console.log(!0);
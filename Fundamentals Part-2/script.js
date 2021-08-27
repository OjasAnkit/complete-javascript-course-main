'use strict';

function logger() {
    console.log("Hello!");
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(`The ingredients are ${apples} Apples and ${oranges} Oranges!`);
    const juice = `Juice made of ${apples + oranges} fruits!`;
    console.log(juice);
}

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2001);

console.log(`I am currently ${calcAge2(2001)} years old!`);

console.log(`I am currently ${age3} years old!`);

const numbers = [21, 23, 32];

let firstName = "Ojas";
let lastName = "Ankit";
const details = [firstName, lastName, calcAge2(2001), numbers];
console.log(details);

details.push("Student");
console.log(details);

const ojas = {
    firstName: "Ojas",
    lastName: "Ankit",
    birthYear: 2001,
    job: "Student",
    friends: ["A", "B", "C", "D"],
    calcAge: function (birthYear) {     //since birthYear is also defined as a property inside of the object we use the this keyword to access it!
        return 2021 - birthYear;
    }
};

const nameKey = "Name";

console.log(ojas["last" + nameKey]);

console.log(`${ojas.firstName} has ${ojas.friends.length} friends and his favorite friend is ${ojas.friends[0]}`)
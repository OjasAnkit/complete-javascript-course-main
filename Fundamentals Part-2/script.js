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

const marks = [21, 23, 32, 54];

let firstName = "Ojas";
let lastName = "Ankit";

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

/*

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(2001);

console.log(`I am currently ${calcAge2(2001)} years old!`);

console.log(`I am currently ${age3} years old!`);

// console.log(details);

// details.push("Student");
// console.log(details);

const ojas = {
    firstName: "Ojas",
    lastName: "Ankit",
    birthYear: 2005,
    job: "Student",
    friends: ["A", "B", "C", "D"],
    calcAge: function () {     //since birthYear is also defined as a property inside of the object we use the this keyword to access it!
        this.age = 2021 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is ${this.calcAge()} years old and he has ${this.hasDriversLicense ? "a" : "no"} drivers license!`
    }
};

console.log(ojas.calcAge());
ojas.hasDriversLicense = (ojas.age >= 18) ? true : false;
console.log(ojas.getSummary());

*/

const nameKey = "Name";
// console.log(ojas["last" + nameKey]);
// console.log(`${ ojas.firstName } has ${ ojas.friends.length } friends and his favorite friend is ${ ojas.friends[0] } `);
// const choice = prompt("What info would you want? firstName, lastName, birthYear, job, age, friends, hasDriversLicense")

// if (ojas[choice]) {
//     console.log(ojas[choice]);
// }
// else {
//     console.log("Invalid choice! Entered property does not exist!");
// }

const details = [firstName, lastName, "Student", calcAge2(2001), marks, ["A", "B", "C", "D"]];

let typesOf = new Array();

for (let i = 0; i < details.length; i++) {
    console.log(details[i]);
    typesOf.push(typeof details[i]);
}

console.log(typesOf);





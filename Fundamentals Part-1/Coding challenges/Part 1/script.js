//Test data 1
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let markBMI = weightMark / (heightMark ** 2);
let johnBMI = weightJohn / (heightJohn ** 2);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

//Test data 2
weightMark = 95;
heightMark = 1.88;

weightJohn = 85;
heightJohn = 1.76;

markBMI = weightMark / (heightMark ** 2);
johnBMI = weightJohn / (heightJohn ** 2);

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);



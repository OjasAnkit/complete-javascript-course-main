const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totalAmount = [];

let avg;

function calcTip(bill) {
    if (bill >= 50 && bill <= 300)
        return bill * 0.15;
    else
        return bill * 0.2;
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum / arr.length;
}

for (let num = 0; num < bills.length; num++) {
    tips.push(calcTip(bills[num]));
    totalAmount.push(tips[num] + bills[num]);
}

avg = calcAverage(totalAmount);

console.log(`The bills are ${bills}`);
console.log(`The tips are ${tips}`);
console.log(`The total amount(bill + tip) is ${totalAmount}`);
console.log(`The avg of total amount is ${avg}`);
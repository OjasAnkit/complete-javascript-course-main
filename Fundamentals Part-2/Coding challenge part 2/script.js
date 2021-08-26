bills = [125, 555, 44];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300)
        return bill * 0.15;
    else
        return bill * 0.2;
}
console.log(`The bills are ${bills}`);

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The tips are ${tips}`);

totalAmount = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`The total amount is ${totalAmount}`);
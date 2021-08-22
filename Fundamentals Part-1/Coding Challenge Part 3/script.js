let bill;

// bill = 275;

// bill = 40;

bill = 430;

let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}💲 and the tip was ${tip}💲, and the total value was ${bill + tip}💲!`);
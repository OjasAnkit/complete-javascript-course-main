const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2);
        return this.BMI;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2);
    }
}

mark.calcBMI();
john.calcBMI();

if (john.BMI > mark.BMI) {
    console.log(`${john.firstName} ${john.lastName}'s BMI(${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI})!`);
}

else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI(${john.BMI})!`);
}

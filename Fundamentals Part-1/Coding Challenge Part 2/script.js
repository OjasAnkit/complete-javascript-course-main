let dolphinsScoreFirst, dolphinsScoreSecond, dolphinsScoreThird;
let koalasScoreFirst, koalasScoreSecond, koalasScoreThird;

let koalasAverage, dolphinsAverage;

//Test data 1
/* koalasScoreFirst = 96; koalasScoreSecond = 108; koalasScoreThird = 89;
dolphinsScoreFirst = 88; dolphinsScoreSecond = 91; dolphinsScoreThird = 110; */

//Test data 2
/* koalasScoreFirst = 97; koalasScoreSecond = 112; koalasScoreThird = 101;
dolphinsScoreFirst = 109; dolphinsScoreSecond = 95; dolphinsScoreThird = 123; */

//Test data 3
koalasScoreFirst = 97; koalasScoreSecond = 112; koalasScoreThird = 101;
dolphinsScoreFirst = 109; dolphinsScoreSecond = 95; dolphinsScoreThird = 106;

dolphinsAverage = (dolphinsScoreFirst + dolphinsScoreSecond + dolphinsScoreThird) / 3;
koalasAverage = (koalasScoreFirst + koalasScoreSecond + koalasScoreThird) / 3;

if (koalasAverage > dolphinsAverage && koalasAverage >= 100) console.log(`Koalas win with an avg score of ${koalasAverage}.`);

else if (koalasAverage === dolphinsAverage && koalasAverage >= 100) console.log(`It is a draw!`);

else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) console.log(`Dolphins win with an avg score of ${dolphinsAverage}.`);

else console.log("No team wins a trophy!");
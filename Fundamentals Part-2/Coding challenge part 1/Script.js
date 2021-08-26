let dScore1, dScore2, dScore3;
let kScore1, kScore2, kScore3;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas)
        return `Dolphins win(${avgDolphins} vs ${avgKoalas})!`;
    else if (avgDolphins < avgKoalas)
        return `Koalas win(${avgKoalas} vs ${avgDolphins})!`;
    else
        return `It is a draw (${avgKoalas} vs ${avgDolphins})!`;
}

//Test data 1
/* dScore1 = 44; dScore2 = 23; dScore3 = 71;
kScore1 = 65; kScore2 = 54; kScore3 = 49; */

//Test data 2
dScore1 = 85; dScore2 = 54; dScore3 = 41;
kScore1 = 23; kScore2 = 34; kScore3 = 27;

let avgDolphins = calcAverage(dScore1, dScore2, dScore3);
let avgKoalas = calcAverage(kScore1, kScore2, kScore3);

console.log(checkWinner(avgDolphins, avgKoalas));
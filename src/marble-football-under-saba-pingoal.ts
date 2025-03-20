import halfProb from "./marble-odds.json";

const match1 = halfProb["match9"] as any;

const newMatch1 = {} as any;

const match1_0_0 = match1["0-0"];
let checkSum = 0;
Object.keys(match1).forEach((key) => {
  if (key != "0-0") {
    newMatch1[key] = (match1[key] + (match1_0_0 / (0.91 - match1_0_0)) * match1[key]) / 0.91;
    newMatch1[key] = Math.round(newMatch1[key] * 10000) / 10000;
    checkSum += newMatch1[key];
  }
});

console.log(newMatch1);
console.log(checkSum);

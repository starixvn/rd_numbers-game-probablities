import marbleProbabilities from "./marble-odds.json";
import fs from "fs";
const margin = 0.02;

function calculateBetChoiceProbForHalf(halfProb: { [key: string]: number }) {
  const GameRatesKeys = Object.keys(halfProb);
  let totalRates = 0;
  let A_score = 0;
  let B_score = 0;
  let A_win = 0;
  let B_win = 0;
  let X_draw = 0;

  GameRatesKeys.forEach((key) => {
    totalRates += halfProb[key];
    A_score += parseInt(key[0]) * halfProb[key];
    B_score += parseInt(key[2]) * halfProb[key];

    if (parseInt(key[0]) > parseInt(key[2])) {
      A_win += halfProb[key];
    } else if (parseInt(key[0]) < parseInt(key[2])) {
      B_win += halfProb[key];
    } else {
      X_draw += halfProb[key];
    }
  });

  A_score /= totalRates;
  B_score /= totalRates;

  const hdp = Math.round((A_score - B_score) / 0.5) * 0.5;

  let hdpA = 0;
  let hdpB = 0;
  let hdpDraw = 0;

  GameRatesKeys.forEach((key) => {
    const newA = parseInt(key[0]);
    const newB = parseInt(key[2]) + hdp;

    if (newA > newB) {
      hdpA += halfProb[key];
    } else if (newA < newB) {
      hdpB += halfProb[key];
    } else {
      hdpDraw += halfProb[key];
    }
  });

  hdpA /= totalRates;
  hdpB /= totalRates;
  hdpDraw /= totalRates;

  let OU = Math.floor((A_score + B_score) / 0.5) * 0.5;
  if (Math.round(OU * 2) % 2 === 0) OU += 0.5;
  let over = 0;
  let under = 0;
  let OU_draw = 0;
  let odd = 0;
  let even = 0;

  GameRatesKeys.forEach((key) => {
    const total = parseInt(key[0]) + parseInt(key[2]);

    if (total > OU) {
      over += halfProb[key];
    } else if (total < OU) {
      under += halfProb[key];
    } else {
      OU_draw += halfProb[key];
    }

    if (total % 2 === 0) {
      even += halfProb[key];
    } else {
      odd += halfProb[key];
    }
  });

  over /= totalRates;
  under /= totalRates;
  OU_draw /= totalRates;

  odd /= totalRates;
  even /= totalRates;

  const result: any = {
    A_score: A_score,
    B_score: B_score,
    hdp: hdp,
    OU: OU,
    probabilities: {
      home_1x2: A_win / totalRates,
      away_1x2: B_win / totalRates,
      draw_1x2: X_draw / totalRates,
      over: over,
      under: under,
      odd: odd,
      even: even,
    },
    handicap: {
      hdpA: hdpA,
      hdpB: hdpB,
      hdpDraw: hdpDraw,
    },
  };

  GameRatesKeys.forEach((key) => {
    result.probabilities[key] = halfProb[key] / totalRates;
  });

  return result;
}

function calculateBetChoiceForAllMatchProb(oddsData: any) {
  const result: any = {};

  Object.keys(oddsData).forEach((matchKey) => {
    result[matchKey] = calculateBetChoiceProbForHalf(oddsData[matchKey]);
  });

  return result;
}

const allMatchProb = calculateBetChoiceForAllMatchProb(marbleProbabilities);

const calculateOddsFromProb = (prob: number) => {
  const odds = (1 - margin) / prob;
  return Math.floor(odds * 100) / 100;
};

const calculateAllMatchOdds = (allMatchProb: any) => {
  const allMatchOdds: any = {};

  Object.keys(allMatchProb).forEach((matchKey) => {
    const prob = allMatchProb[matchKey].probabilities;
    const matchOdds: any = {};
    matchOdds.hdpValue = allMatchProb[matchKey].hdp;
    matchOdds.OUValue = allMatchProb[matchKey].OU;

    Object.keys(prob).forEach((choice) => {
      matchOdds[choice] = calculateOddsFromProb(prob[choice]);
    });

    const handicap = allMatchProb[matchKey].handicap;
    const hdpA = (1 - margin - handicap.hdpDraw) / handicap.hdpA;
    const hdpB = (1 - margin - handicap.hdpDraw) / handicap.hdpB;

    matchOdds.home_hdp = Math.floor(hdpA * 100) / 100;
    matchOdds.away_hdp = Math.floor(hdpB * 100) / 100;

    allMatchOdds[matchKey] = matchOdds;
  });

  return allMatchOdds;
};

const allMatchOdds = calculateAllMatchOdds(allMatchProb);

function saveCsv(filename: string, data: string) {
  // const __dirname = path.dirname(filename);
  // const filePath = path.join(__dirname, filename);

  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error("Error writing to CSV file", err);
    } else {
      console.log(`CSV file saved as ${filename}`);
    }
  });
}

export const csvHeader = "match,betChoice,value";

export const csvData = Object.entries(allMatchOdds).map(([matchKey, matchOdds]: [string, any]) => {
  const rows = Object.entries(matchOdds).map(([betChoice, value]: [string, any]) => {
    return `${matchKey},${betChoice},${value}`;
  });
  return rows.join("\n");
});

// saveCsv("marble-odds.csv", csvHeader + "\n" + csvData.join("\n"));
// console.log(allMatchOdds.match8);

const matchConfigs = {} as any;

Object.keys(allMatchProb).forEach((matchKey) => {
  const matchConfig = {
    rate: (marbleProbabilities as any)[matchKey],
    odds: {
      home: allMatchOdds[matchKey].home_1x2,
      away: allMatchOdds[matchKey].away_1x2,
      draw: allMatchOdds[matchKey].draw_1x2,
      over: allMatchOdds[matchKey].over,
      under: allMatchOdds[matchKey].under,
    },
    hdp: allMatchProb[matchKey].hdp,
    OU: allMatchProb[matchKey].OU,
  };

  matchConfigs[matchKey] = matchConfig;
});

console.log(matchConfigs);

// const match9 = {} as any;
// Object.keys(marbleProbabilities.match1).forEach((key) => {
//   match9[key] = (marbleProbabilities.match1 as any)[key] + (marbleProbabilities.match3 as any)[key];
//   match9[key] = Math.floor(match9[key] * 100) / 100;
// });

// console.log(match9);

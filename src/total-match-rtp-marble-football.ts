import halfProb from "./marble-odds.json";

const margin = 0;

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

  let OU = Math.floor((A_score + B_score) / 0.5) * 0.5;
  if (Math.round(OU * 2) % 2 === 0) OU += 0.5;
  let over = 0;
  let under = 0;
  let OU_draw = 0;

  GameRatesKeys.forEach((key) => {
    const total = parseInt(key[0]) + parseInt(key[2]);

    if (total > OU) {
      over += halfProb[key];
    } else if (total < OU) {
      under += halfProb[key];
    } else {
      OU_draw += halfProb[key];
    }
  });

  over /= totalRates;
  under /= totalRates;
  OU_draw /= totalRates;

  const result: any = {
    A_score: A_score,
    B_score: B_score,
    OU: OU,
    probabilities: {
      home_1x2: A_win / totalRates,
      away_1x2: B_win / totalRates,
      draw_1x2: X_draw / totalRates,
      over: over,
      under: under,
    },
  };

  return result;
}

const calculateOddsFromProb = (prob: number) => {
  const odds = (1 - margin) / prob;
  return Math.floor(odds * 100) / 100;
};

const calculateOddsForMatch = (matchProb: any) => {
  const odds: any = {};
  Object.keys(matchProb).forEach((key) => {
    odds[key] = calculateOddsFromProb(matchProb[key]);
  });

  return odds;
};

const calculateTotalMatchProb = (firstHalf: any, secondHalf: any) => {
  const wholeMatch = {} as any;
  Object.keys(firstHalf).forEach((key) => {
    Object.keys(secondHalf).forEach((key2) => {
      const newKey = `${+key[0] + +key2[0]}-${+key[2] + +key2[2]}`;

      const newValue = firstHalf[key] * secondHalf[key2];
      const oldVal = wholeMatch[newKey] || 0;
      wholeMatch[newKey] = newValue + oldVal;
      // wholeMatch[newKey] = Math.round(wholeMatch[newKey] * 100000) / 100000;
    });
  });

  return wholeMatch;
};

const totalMatchProb = calculateTotalMatchProb(halfProb.match1, halfProb.match1);

const totalMatchProbPerBetChoice = calculateBetChoiceProbForHalf(totalMatchProb);

const totalMatchOdds = calculateOddsForMatch(totalMatchProbPerBetChoice.probabilities);

console.log(totalMatchProbPerBetChoice);
console.log(totalMatchOdds);

console.log(totalMatchProb);

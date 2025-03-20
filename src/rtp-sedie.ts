import Chance from "chance";
import { to } from "mathjs";

const chance = new Chance();

const extraFee = 0.2;

const odds = {
  odd: 1.96,
  even: 1.96,
  red2: 2.4,
  red3: 3.75,
  white3: 3.75,
  red4: 14.4,
  white4: 14.4,
};

const win = {
  odd: 0,
  even: 0,
  red2: 0,
  red3: 0,
  white3: 0,
  red4: 0,
  white4: 0,
};

const total = {
  odd: 0,
  even: 0,
  red2: 0,
  red3: 0,
  white3: 0,
  red4: 0,
  white4: 0,
};

const multiplierChoice: any = {
  odd: 0,
  even: 0,
  red2: 0,
  red3: 0,
  white3: 0,
  red4: 0,
  white4: 0,
};

const red = () => chance.pickone([0, 1]);

const totalRed = () => red() + red() + red() + red();

const rtp = (turn: number) => {
  for (let i = 0; i < turn; i++) {
    const result = totalRed();

    const multiplier: any = {
      odd: 1,
      even: 1,
      red2: 1,
      red3: 1,
      white3: 1,
      red4: 1,
      white4: 1,
    };

    const xChoice = chance.weighted(
      ["odd", "even", "red2", "red3", "white3", "red4", "white4"],
      [20, 20, 20, 10, 10, 10, 10]
    );

    const multiValue = chance.weighted([2, 3, 4, 5, 8], [50, 30, 10, 5, 5]);

    multiplier[xChoice] = multiValue;
    ++multiplierChoice[xChoice];

    if (result % 2 === 0) {
      win.even += (odds.even - 1) * multiplier.even + 1;
      ++total.even;
    } else {
      win.odd += (odds.odd - 1) * multiplier.odd + 1;
      ++total.odd;
    }

    if (result === 2) {
      win.red2 += (odds.red2 - 1) * multiplier.red2 + 1;
      ++total.red2;
    }

    if (result === 3) {
      win.red3 += (odds.red3 - 1) * multiplier.red3 + 1;
      ++total.red3;
    }

    if (result === 1) {
      win.white3 += (odds.white3 - 1) * multiplier.white3 + 1;
      ++total.white3;
    }

    if (result === 4) {
      win.red4 += (odds.red4 - 1) * multiplier.red4 + 1;
      ++total.red4;
    }

    if (result === 0) {
      win.white4 += (odds.white4 - 1) * multiplier.white4 + 1;
      ++total.white4;
    }
  }

  const totalBet = turn * (1 + extraFee);

  return {
    rtp: {
      odd: win.odd / totalBet,
      even: win.even / totalBet,
      red2: win.red2 / totalBet,
      red3: win.red3 / totalBet,
      white3: win.white3 / totalBet,
      red4: win.red4 / totalBet,
      white4: win.white4 / totalBet,
    },
  };
};

console.log(rtp(10_000_000));

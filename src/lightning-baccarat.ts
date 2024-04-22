import * as math from "mathjs";
function getAverageRtp() {
  const playerOrBankerCards = 3;
  const totalCards = 52;
  const remainingCards = 49;
  const fee = 0.2;
  const originalRtp = 1;
  const multipliersValues = [2, 3, 4, 5, 8];
  const multipliersProb = {
    2: 0.72,
    3: 0.15,
    4: 0.07,
    5: 0.05,
    8: 0.01,
  } as any;

  const numberOfMultipliersProb = {
    1: 0.2,
    2: 0.3,
    3: 0.3,
    4: 0.1,
    5: 0.1,
  } as any;

  function getLightningRtp(numberOfMultipliers: number, multipliers: number[]) {
    const combinations = math.combinations(totalCards, numberOfMultipliers);

    const having1multiplier = 3 * math.combinations(remainingCards, numberOfMultipliers - 1);
    const having2multiplier = numberOfMultipliers > 1 ? 3 * math.combinations(remainingCards, numberOfMultipliers - 2) : 0;
    const having3multiplier = numberOfMultipliers > 2 ? math.combinations(remainingCards, numberOfMultipliers - 3) : 0;

    const prob1 = having1multiplier / combinations;
    const prob2 = playerOrBankerCards > 1 ? having2multiplier / combinations : 0;
    const prob3 = playerOrBankerCards > 2 ? having3multiplier / combinations : 0;
    const prob0 = 1 - prob1 - prob2 - prob3;

    const prob = [prob1, prob2, prob3];

    const expected = prob.map((val, index) => {
      let totalMultiply = 1;

      for (let i = 0; i <= index; i++) {
        totalMultiply *= multipliers[i] ?? 0;
      }

      return val * totalMultiply;
    });

    const totalExpected = expected.reduce((total, val) => total + val, 0) + prob0;

    const rtp = (totalExpected * originalRtp) / (1 + fee);

    return rtp;
  }

  function getAverageRtpFor1() {
    const arr = [];

    for (let a = 0; a < 5; a++) {
      const multipliers = [];
      multipliers.push(multipliersValues[a]);
      arr.push({ rtp: getLightningRtp(1, multipliers), prob: multipliersProb[multipliersValues[a]] });
    }

    return arr.reduce((acc, val) => acc + val.rtp * val.prob, 0);
  }

  function getAverageRtpFor2() {
    const arr = [];

    for (let a = 0; a < 5; a++) {
      for (let b = 0; b < 5; b++) {
        const multipliers = [];
        const prob = multipliersProb[multipliersValues[a]] * multipliersProb[multipliersValues[b]];
        multipliers.push(multipliersValues[a], multipliersValues[b]);
        arr.push({ rtp: getLightningRtp(2, multipliers), prob });
      }
    }

    return arr.reduce((acc, val) => acc + val.rtp * val.prob, 0);
  }

  function getAverageRtpForGreaterOrEqual3(numberOfMultipliers: number) {
    const arr = [];

    for (let a = 0; a < 5; a++) {
      for (let b = 0; b < 5; b++) {
        for (let c = 0; c < 5; c++) {
          const multipliers = [];
          const prob =
            multipliersProb[multipliersValues[a]] *
            multipliersProb[multipliersValues[b]] *
            multipliersProb[multipliersValues[c]];
          multipliers.push(multipliersValues[a], multipliersValues[b], multipliersValues[c]);
          arr.push({ rtp: getLightningRtp(numberOfMultipliers, multipliers), prob });
        }
      }
    }

    return arr.reduce((acc, val) => acc + val.rtp * val.prob, 0);
  }

  const avgRtp1 = getAverageRtpFor1();
  const avgRtp2 = getAverageRtpFor2();
  const avgRtp3 = getAverageRtpForGreaterOrEqual3(3);
  const avgRtp4 = getAverageRtpForGreaterOrEqual3(4);
  const avgRtp5 = getAverageRtpForGreaterOrEqual3(5);

  const avgRtp = [avgRtp1, avgRtp2, avgRtp3, avgRtp4, avgRtp5];

  return avgRtp.reduce((acc, val, index) => acc + val * numberOfMultipliersProb[index + 1], 0);
}

console.log(getAverageRtp());

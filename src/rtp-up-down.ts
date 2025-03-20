import Chance from "chance";

const chance = new Chance();

const refund = 0;

const odds = {
  up: 2,
  down: 2,
  tie: 5,
};

const dice = () => chance.integer({ min: 1, max: 6 });

const roll = () => dice() + dice();

const rtp = (turn: number, random: number = 100) => {
  const win = {
    up: 0,
    down: 0,
    tie: 0,
  };

  for (let i = 0; i < turn; i++) {
    const result = roll();

    const multiplier: any = {
      tie: 1,
      up: 1,
      down: 1,
    };

    if (chance.bool({ likelihood: random })) {
      const xChoice = chance.weighted(["tie", "up", "down"], [24, 38, 38]);
      const multiValue = chance.weighted([1, 2, 3, 4, 5, 6, 7, 8], [30, 62.5, 1, 4, 1, 0.6, 0.5, 0.4]);

      multiplier[xChoice] = multiValue;
    }

    if (result === 7) {
      win.tie += (odds.tie - 1) * multiplier.tie + 1;
      win.up += refund;
      win.down += refund;
    } else if (result > 7) {
      win.up += (odds.up - 1) * multiplier.up + 1;
    } else {
      win.down += (odds.down - 1) * multiplier.down + 1;
    }
  }

  if (win.tie > turn) console.log("Tie wins:", win.tie / turn);

  return {
    up: win.up / turn,
    down: win.down / turn,
    tie: win.tie / turn,
  };
};

const batch = 50_000;

const totalRTP = [];

for (let i = 0; i < 1000; i++) {
  totalRTP.push(rtp(batch, 100));
}

import countWithCombination from "./countWithCombination";

export interface OU {
  over: number;
  under: number;
}

export function getOddsSumBall(
  ballsRemoved: number[],
  allBall = 90,
  ballTaken = 3,
  target = 137
): OU {
  const balls = new Set<number>();
  for (let i = 1; i <= allBall; i++) {
    if (!ballsRemoved.includes(i)) {
      balls.add(i)
    };
  }

  let countAll = 0;
  const count = countWithCombination([...balls], ballTaken, (item) => {
    const sum = item[0] + item[1] + item[2];
    countAll++;
    return sum >= target;
  });

  const result: OU = {
    over: countAll / count,
    under: countAll / (countAll - count),
  };

  return result;
}

import countWithCombination from "./combination";

export interface OU {
  over: number;
  under: number;
}

export function getOddsSumBall(
  ballsRemoved: number[],
  allBall: number = 90,
  ballTaken: number = 3,
  target: number = 137
): OU {
  let balls = new Set<number>();
  for (let i = 1; i <= allBall; i++) {
    if (!ballsRemoved.includes(i)) balls.add(i);
  }

  let countAll = 0;
  let count = countWithCombination([...balls], ballTaken, (item) => {
    let sum = item[0] + item[1] + item[2];
    countAll++;
    return sum >= target;
  });

  const result: OU = {
    over: countAll / count,
    under: countAll / (countAll - count),
  };

  return result;
}

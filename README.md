## The Standard (in-play) Odds computation for the Number Games.

The `Standard Odds` dynamically adjust based on the score, draw, and other factors.

## Supported games

|     Name     |          Bet Options           |
| :----------: | :----------------------------: |
| `next-ball`  | `odd`, `even`, `over`, `under` |
| `number-war` |   `player`, `banker`, `tie`    |
| `next-three-happy` |   `player`, `banker`, `tie`    |

## Installation

```bash
npm install @rd/numbers-game-odds
```

or

```bash
yarn add @rd/numbers-game-odds
```

## How to use

### Next-ball

`NextBall.getOdds` (function)

_Parameters_

- drawn (`number[]`) - The drawn balls

_Returns_ `NextBallOptions`

_Examples_

```Typescript
import { NextBall } from "@rd/numbers-game-odds";

NextBall.getOdds([]);
/*
 * Returns
 * {
 *   over: 1.9736842105263157,
 *   odd: 1.9736842105263157,
 *   under: 2.027027027027027,
 *   even: 2.027027027027027
 * }
*/
```

### Number-war

`NumberWar.getOdds` (function)

_Parameters_

- playerDrawn (`number[]`) - The player's drawn balls
- bankerDrawn (`number[]`) - The banker's drawn balls

_Returns_ `NumberWarOptions`

_Examples_

```Typescript
import { NumberWar } from "@rd/numbers-game-odds";

NumberWar.getOdds([],[]);
/*
 * Returns
 * {
 *   player: 2.2233201581027666,
 *   banker: 2.2233201581027666,
 *   tie: 9.955752212389381
 * }
*/
```

### Next-three-happy

`NextThreeHappy.getOddsSumBall` (function)

Calculates the odds of getting a sum of numbers greater than or equal to a target value
from a set of balls, after removing certain balls.

_Parameters_

- removedBalls - The balls that have been removed.
- numberOfTotalBalls - The total number of balls.
- numberOfTakenBall - The number of balls that have been taken.
- targetValue - The target value.

_Returns_ `NextThreeHappyOptions`

_Examples_

```Typescript
import { NextThreeHappy } from "@rd/numbers-game-odds";

NextThreeHappy.getOddsSumBall([], 90, 3, 137);
/*
 * Returns
 * {
 *   over: 2,
 *   under: 2
 * }
*/
```
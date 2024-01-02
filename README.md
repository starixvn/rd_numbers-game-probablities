## The Standard (in-play) Probabilities computation for the Number Games.

The `Standard Probabilities` dynamically adjust based on the score, draw, and other factors.

## Supported games

|     Name     |          Bet Options           |
| :----------: | :----------------------------: |
| `next-ball`  | `odd`, `even`, `over`, `under` |
| `number-war` |   `player`, `banker`, `tie`    |
| `next-three-happy` |   `over`, `under`    |

## Installation

```bash
npm install @rd/numbers-game-probabilities
```

or

```bash
yarn add @rd/numbers-game-probabilities
```

## How to use

### Next-ball

`NextBall.getProbabilities` (function)

_Parameters_

- drawn (`number[]`) - The drawn balls

_Returns_ `NextBallOptions`

_Examples_

```Typescript
import { NextBall } from "@rd/numbers-game-probabilities";

NextBall.getProbabilities([]);
/*
 * Returns
 * {
 *   over: 0.5066666666666667,
 *   odd: 0.5066666666666667,
 *   under: 0.49333333333333335,
 *   even: 0.49333333333333335,
 * }
*/
```

### Number-war

`NumberWar.getProbabilities` (function)

_Parameters_

- playerDrawn (`number[]`) - The player's drawn balls
- bankerDrawn (`number[]`) - The banker's drawn balls

_Returns_ `NumberWarOptions`

_Examples_

```Typescript
import { NumberWar } from "@rd/numbers-game-probabilities";

NumberWar.getProbabilities([],[]);
/*
 * Returns
 * {
 *   player: 0.49333333333333335,
 *   banker: 0.49333333333333335,
 *   tie: 0.013333333333333334
 * }
*/
```

### Next-three-happy

`NextThreeHappy.getOdds` (function)

_Parameters_

- drawn - The balls that have been removed.

_Returns_ `NextThreeHappyOptions`

_Examples_

```Typescript
import { NextThreeHappy } from "@rd/numbers-game-odds";

NextThreeHappy.getOdds([]);
/*
 * Returns
 * {
 *   over: 2,
 *   under: 2
 * }
*/
```
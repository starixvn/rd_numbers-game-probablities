## The Standard (in-play) Odds computation for the Number Games.

The `Standard Odds` dynamically adjust based on the score, draw, and other factors.

## Supported games

|     Name     |          Bet Options           |
| :----------: | :----------------------------: |
| `next-ball`  | `odd`, `even`, `over`, `under` |
| `number-war` |   `player`, `banker`, `tie`    |

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

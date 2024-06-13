## The Standard (in-play) Probabilities computation for the Number Games.

The `Standard Probabilities` dynamically adjust based on the score, draw, and other factors.

## Supported games

|        Name        |                    Bet Options                    |
| :----------------: | :-----------------------------------------------: |
|    `next-ball`     |          `odd`, `even`, `over`, `under`           |
|     `bac-ball`     |             `player`, `banker`, `tie`             |
| `next-three-happy` |                  `over`, `under`                  |
|   `lucky-three`    | `over`, `under`, `red2`, `red3`, `blue2`, `blue3` |

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

### Bac-ball

`BacBall.getProbabilities` (function)

_Parameters_

- playerDrawn (`number[]`) - The player's drawn balls
- bankerDrawn (`number[]`) - The banker's drawn balls

_Returns_ `BacBallOptions`

_Examples_

```Typescript
import { BacBall } from "@rd/numbers-game-probabilities";

BacBall.getProbabilities([],[]);
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

`NextThreeHappy.getProbabilities` (function)

_Parameters_

- drawn - The drawn balls.

_Returns_ `NextThreeHappyOptions`

_Examples_

```Typescript
import { NextThreeHappy } from "@rd/numbers-game-odds";

NextThreeHappy.getProbabilities([]);
/*
 * Returns
 * {
 *   over: 0.5,
 *   under: 0.5
 * }
*/
```

### Lucky-three

`LuckyThree.getProbabilities` (function)

_Parameters_

- drawn - The drawn balls.

_Returns_ `LuckyThreeOptions`

---

`LuckyThree.getProbabilitiesRange` (function)

_Parameters_

- numberOfTurns - The number of turns per round (default = 3).

_Returns_ `getProbabilitiesRange`

---

_Examples_

```Typescript
import { LuckyThree } from "@rd/numbers-game-odds";

LuckyThree.getProbabilities();
/*
 * Returns
 * {
 *   over: 0.5,
 *   under: 0.5,
 *   red2: 0.3792134831460674,
 *   red3: 0.12078651685393259,
 *   blue2: 0.3792134831460674,
 *   blue3: 0.12078651685393259
 * }
*/
```

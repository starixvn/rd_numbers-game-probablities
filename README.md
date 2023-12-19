## The Standard (in-play) Odds computation for the Number Games.

The `Standard Odds` dynamically adjust based on the score, draw, and other factors.

## Supported games

|    Name     |          Bet Options           |
| :---------: | :----------------------------: |
| `next-ball` | `odd`, `even`, `over`, `under` |

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

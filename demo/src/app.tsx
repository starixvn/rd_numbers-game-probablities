import "mini.css";
import "./app.css";
import { BacBall } from "./components/BacBall";
import { JSX } from "preact/jsx-runtime";
import { useState } from "preact/hooks";
import { NextBall } from "./components/NextBall";

interface GameSelectionMenu {
  NextBall: boolean;
  BacBall: boolean;
}

export function App() {
  const [gameSelection, setGameSelection] = useState({
    NextBall: true,
    BacBall: true,
  } as GameSelectionMenu);

  function handleChange(e: JSX.TargetedEvent<HTMLInputElement, Event>) {
    const { name, value } = e.currentTarget;
    let changedValue = value.toLocaleLowerCase() !== "true";

    setGameSelection({
      ...gameSelection,
      [name]: changedValue,
    });
  }

  return (
    <>
      <fieldset>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <p style="margin:0px;font-weight:700">Choose Game:</p>
            </div>
            <div className="col-sm-2">
              <label htmlFor="NextBall">Next Ball</label>
              <input
                type="checkbox"
                name="NextBall"
                value={gameSelection.NextBall ? "true" : "false"}
                onInput={handleChange}
                style="margin:0px"
                checked={gameSelection.NextBall}
              />
            </div>
            <div className="col-sm-2">
              <label htmlFor="BacBall">Bac Ball</label>
              <input
                type="checkbox"
                name="BacBall"
                value={gameSelection.BacBall ? "true" : "false"}
                checked={gameSelection.BacBall}
                onInput={handleChange}
                style="margin:0px"
              />
            </div>
          </div>
        </div>
      </fieldset>
      {gameSelection.NextBall ? <NextBall /> : <div></div>}
      {gameSelection.BacBall ? <BacBall /> : <div></div>}
    </>
  );
}

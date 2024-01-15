import { useState } from "preact/hooks";
import "mini.css";
import "../app.css";
import { NumberWarOdds, calculateBetOdds } from "../helper/number-game";
import { JSX } from "preact/jsx-runtime";

interface NumberWarData {
  playerDrawn: string;
  bankerDrawn: string;
  margin: string;
}

export function NumberWar() {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({} as NumberWarData);
  const [odds, setOdds] = useState({} as NumberWarOdds);
  const [hidden, setHidden] = useState(true);

  const handleDataChanged = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const { name, value } = e.currentTarget;

    setData({
      ...data,
      [name]: value,
    });

    setHidden(true);
  };

  const handleCalculateOdds = () => {
    const playerDrawn = data.playerDrawn.replace(/,\s*$/, "").split(",").map(Number);
    const bankerDrawn = data.bankerDrawn.replace(/,\s*$/, "").split(",").map(Number);
    const margin = Number(data.margin);

    const result = calculateBetOdds(playerDrawn, bankerDrawn, margin);
    setOdds(result);
    setHidden(false);
  };

  const handleOnClickCalculate = (e: MouseEvent) => {
    e.preventDefault();
    handleCalculateOdds();
  };

  const handleResetData = (e: MouseEvent) => {
    e.preventDefault();
    setData({
      playerDrawn: "",
      bankerDrawn: "",
      margin: "",
    });
    setOdds({} as NumberWarOdds);
    setHidden(true);
  };

  return (
    <form>
      <fieldset>
        <legend>Number War</legend>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="player-drawn">Player drawn balls</label>
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                name="playerDrawn"
                placeholder="1,2,3,..."
                style="width:100%"
                value={data.playerDrawn ?? ""}
                onInput={handleDataChanged}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="banker-drawn">Banker drawn balls</label>
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                name="bankerDrawn"
                placeholder="1,2,3,..."
                style="width:100%"
                value={data.bankerDrawn ?? ""}
                onInput={handleDataChanged}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="number-war-margin">Margin</label>
            </div>
            <div className="col-sm-4">
              <input
                type="text"
                name="margin"
                placeholder="0"
                style="width:100%"
                value={data.margin ?? ""}
                onInput={handleDataChanged}
              />
            </div>
            <div className="col-sm-3">
              <button className="primary" style="width:100%; margin:4px" onClick={handleOnClickCalculate}>
                Calculate
              </button>
            </div>
            <div className="col-sm-3">
              <button className="secondary" style="width:100%; margin:4px" onClick={handleResetData}>
                Reset
              </button>
            </div>
          </div>
          <table style={`${hidden ? "display:none" : ""} `}>
            <thead>
              <tr>
                <th>Bet Option</th>
                <th>Odd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Bet Option">Player</td>
                <td data-label="Odd">{odds.player}</td>
              </tr>
              <tr>
                <td data-label="Bet Option">Banker</td>
                <td data-label="Odd">{odds.banker}</td>
              </tr>
              <tr>
                <td data-label="Bet Option">Tie</td>
                <td data-label="Odd">{odds.tie}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </form>
  );
}

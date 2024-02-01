import { useState } from "preact/hooks";
import "mini.css";
import "../app.css";
import { JSX } from "preact/jsx-runtime";
import { NextBallOdds, calculateBetOdds } from "../helper/next-ball";

interface NextBallData {
  drawn: string;
  margin: string;
}

export function NextBall() {
  const [data, setData] = useState({
    drawn: "",
    margin: "",
  } as NextBallData);

  const [odds, setOdds] = useState({} as NextBallOdds);
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
    const drawn = data.drawn
      .split(",")
      .map(Number)
      .filter((num) => num > 0);
    const margin = Number(data.margin);

    const result = calculateBetOdds(drawn, margin);
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
      drawn: "",
      margin: "",
    });
    setOdds({} as NextBallOdds);
    setHidden(true);
  };

  return (
    <form>
      <fieldset>
        <legend>Next Ball</legend>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="drawn">Drawn balls</label>
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                name="drawn"
                placeholder="1,2,3,..."
                style="width:100%"
                value={data.drawn ?? ""}
                onInput={handleDataChanged}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <label htmlFor="next-ball-margin">Margin</label>
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
                <td data-label="Bet Option">Over</td>
                <td data-label="Odd">{odds.over}</td>
              </tr>
              <tr>
                <td data-label="Bet Option">Under</td>
                <td data-label="Odd">{odds.under}</td>
              </tr>
              <tr>
                <td data-label="Bet Option">Odd</td>
                <td data-label="Odd">{odds.odd}</td>
              </tr>
              <tr>
                <td data-label="Bet Option">Even</td>
                <td data-label="Odd">{odds.even}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </form>
  );
}

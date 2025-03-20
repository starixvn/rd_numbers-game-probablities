import marbleProbabilities from "./marble-odds.json";
import fs from "fs";
import { csvHeader, csvData } from "./rtp-marble-football";

const key = Object.keys(marbleProbabilities.match8).join(",");
const val = Object.values(marbleProbabilities.match8).join(",");

console.log(key);
console.log(val);

function saveCsv(filename: string, data: string) {
  // const __dirname = path.dirname(filename);
  // const filePath = path.join(__dirname, filename);

  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error("Error writing to CSV file", err);
    } else {
      console.log(`CSV file saved as ${filename}`);
    }
  });
}
saveCsv("new.csv", key + "\n" + val);

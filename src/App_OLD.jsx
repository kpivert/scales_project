import { useState } from "react";
import * as d3 from "d3";
import "./App.css";

export const data = [
  { count: 6, name: "Hantavirus" },
  { count: 7, name: "Tularemia" },
  { count: 7, name: "Dengue" },
  { count: 9, name: "Ebola" },
  { count: 11, name: "E. coli" },
  { count: 15, name: "Tuberculosis" },
  { count: 17, name: "Salmonella" },
  { count: 18, name: "Vaccinia" },
  { count: 54, name: "Brucella" },
];

const width = 650;
const height = 360;
const xScale = d3.scaleLinear().domain([0, 55]).range([0, width]);
const yScale = d3
  .scaleBand()
  .domain((d) => d.name)
  .range([0, height])
  .padding(0.2);

function App() {
  // const gridLines =

  return (
    <>
      <div style={{ width: width + 100, padding: "0x 20px" }}>
        <h1>Escape artists</h1>
        <p>Number of laboratory-acquired infections, 1970-2021</p>
        <svg width={width} height={height}>
          {/* {data.map((d, i) => (
            <text key={i}>{d.name}</text>
          ))} */}
        </svg>
        <p>
          Sources: Laboratory-Acquired Infection Database; American Biological
          Safety Association
        </p>
        <br></br>
        <p>The Economist</p>
      </div>
    </>
  );
}

export default App;

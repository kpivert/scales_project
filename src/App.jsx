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
  .domain(data.map((d) => d.name))
  .range([height, 0])
  .padding(0.3);

const econBlue = "#0A6FA2";

const xLines = d3
  .range(0, 55, 5)
  .map((d) => (
    <line x1={xScale(d)} x2={xScale(d)} y1={height} y2={0} stroke="red"></line>
  ));

const xTicks = d3.range(0, 55, 5).map((d) => (
  <text x={xScale(d)} y={30} fill="#000" textAnchor="middle" fontSize={30}>
    {d}
  </text>
));

const bars = data.map((d, i) => (
  <rect
    key={i}
    x={0}
    y={yScale(d.name)}
    width={xScale(d.count)}
    height={yScale.bandwidth()}
    fill="#0A6FA2"></rect>
));

const barLabels = data.map((d, i) => (
  <text
    x={d.count > 8 ? xScale(4) : xScale(d.count + 3)}
    y={yScale(d.name) + yScale.bandwidth() / 2}
    // fill="#000"
    fill={d.count < 8 ? econBlue : "#fff"}
    textAnchor="start"
    fontSize={20}>
    {d.name}
  </text>
));

function App() {
  const exampleLine = (
    <line x1={40} x2={40} y1={height} y2={0} stroke="#000"></line>
  );

  console.log(xLines);
  return (
    <>
      <div>
        <h1>Escape artists</h1>
        <p>Number of laboratory-acquired infections, 1970-2021</p>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="red"
            fillOpacity={0.7}
          />
          {exampleLine}
          {xLines}
          {xTicks}
          {bars}
          {barLabels}
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

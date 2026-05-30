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
  .padding(0.4);

const econBlue = "#0A6FA2";
const econGray = "#808080";
const econRed = "#E5001C";
const xLines = d3
  .range(0, 55, 5)
  .map((d) => (
    <line
      x1={xScale(d)}
      x2={xScale(d)}
      y1={height}
      y2={0}
      stroke="#eaeaea"></line>
  ));

const zeroLine = (
  <line x1={0} y1={0} x2={0} y2={height} stroke="#000000"></line>
);

const xTicks = d3.range(0, 55, 5).map((d) => (
  <text x={xScale(d)} y={5} fill={econGray} textAnchor="middle" fontSize={10}>
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
    fill={econBlue}></rect>
));

const barLabels = data.map((d, i) => (
  <text
    x={d.count > 8 ? xScale(1) : xScale(d.count + 0.5)}
    y={yScale(d.name) + yScale.bandwidth() / 2}
    // y={yScale(d.name)}
    fill={d.count < 8 ? econBlue : "#fff"}
    textAnchor="start"
    dominantBaseline="middle"
    fontSize={14}>
    {d.name}
  </text>
));

function App() {
  console.log(yScale.bandwidth());
  return (
    <>
      <div
        style={{
          width: 610,
          height: 100,
          textAlign: "left",
        }}>
        <svg width={610} height={10}>
          <line x1={0} y1={0} x2={610} y2={0} stroke="#000"></line>
          <rect width={39} height={10} x={0} y={0} fill={econRed}></rect>
        </svg>
        <h1>Escape artists</h1>
        <p className="headerText">
          Number of laboratory-acquired infections, 1970-2021
        </p>
      </div>
      <div>
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="#fff" />
          {xLines}
          {zeroLine}
          {xTicks}
          {bars}
          {barLabels}
        </svg>
      </div>
      <div style={{ width: 610, height: 100, textAlign: "left" }}>
        <p className="caption">
          Sources: Laboratory-Acquired Infection Database; American Biological
          Safety Association
        </p>
        <p className="caption">The Economist</p>
      </div>
    </>
  );
}

export default App;

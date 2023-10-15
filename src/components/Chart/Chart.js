import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = Object.values(props.dataPoints);
  const totalMaximum = dataPointValues.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints &&
        Object.entries(props.dataPoints).map(([label, value]) => (
          <ChartBar
            key={label}
            value={value}
            maxValue={totalMaximum}
            label={label}
          />
        ))}
    </div>
  );
};

export default Chart;

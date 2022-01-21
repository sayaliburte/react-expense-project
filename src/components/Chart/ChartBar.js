import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: 80 }}
        ></div>
      </div>
      <div className="chart-bar__label">Rubber</div>
    </div>
  );
};
export default ChartBar;
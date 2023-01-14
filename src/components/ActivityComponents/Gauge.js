import React from "react";
import GaugeChart from "react-gauge-chart";

const Gauge = ({ title = "Title", value = "value", arcLength = [20, 80] }) => {
  return (
    <>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={2}
        arcsLength={arcLength}
        colors={["#36A2EB", "#bbb"]}
        percent={0.8}
        arcPadding={0.0}
        cornerRadius={0}
        needleColor="transparent"
        needleBaseColor="transparent"
        hideText
        textColor="grey"
        arcWidth={0.3}
      />
      <h3
        style={{
          textAlign: "center",
          position: "relative",
          bottom: "58%",
          color: "grey",
        }}
      >
        <span style={{ color: "	#696969", fontSize: "30px" }}>{value}</span>
      </h3>
      <h3
        style={{
          textAlign: "center",
          position: "relative",
          bottom: "55%",
          color: "grey",
        }}
      >
        <span style={{ fontSize: "15px" }}>{title}</span>
      </h3>
    </>
  );
};

export default Gauge;

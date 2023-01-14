import React from "react";
import PluggLogo from "../img/logo.png";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer" style={{ width: "250px" }}>
      <a
        target="._blank"
        href="https://www.plugg.network"
        style={{
          marginLeft: "10%",
          color: "black",
          position: "relative",
          left: "12%",
          top: "20%",
        }}
      >
        Powered by Plugg
        <img
          src={PluggLogo}
          style={{
            position: "relative",
            right: "50%",
            width: "20px",
            height: "20px",
            top: "15%",
          }}
        />
      </a>
    </div>
  );
};

export default Footer;

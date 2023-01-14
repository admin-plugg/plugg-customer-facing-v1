import styles from "./Style/Activity.module.css";
import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import PieChart from "../components/ActivityComponents/PieChart";
import Gauge from "../components/ActivityComponents/Gauge";
import CountUp from "../components/ActivityComponents/CountUp";
import Card from "../components/ActivityComponents/Card";
import { faGift, faStar } from "@fortawesome/free-solid-svg-icons";

const Activity = () => {
  return (
    <div>
      <SideNavBar>
        <div className={styles.activitycontainer}>
          <div className={styles.box} id={styles.box1}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "0",
                marginTop: "0",
                color: "rgba(107, 103, 103, 0.888)",
              }}
            >
              <span style={{ fontSize: "25px" }}>Total Value Saved</span> <br />
              <span style={{ color: "#555555", marginLeft: "5px" }}>
                ₹500.00
              </span>
            </h3>

            <PieChart />
          </div>
          <div className={styles.box} id={styles.box2}>
            <Card
              title={"No. of NFT Received"}
              iconName={faStar}
              start={0}
              end={3}
              timer={1}
            />
          </div>
          <div className={styles.box} id="box-3">
            <Gauge
              value="20/100"
              title={"No. of Unlocked Rewards"}
              arcLength={[20, 80]}
            />
          </div>
          <div className={styles.box} id="box-4">
            <Card
              title={"No. of Rewards Received"}
              iconName={faGift}
              start={20}
              end={100}
              timer={20}
            />
          </div>
          <div className={styles.box} id="box-4">
            <Gauge
              value="40/60"
              title={"No. of Rewards Redemmed"}
              arcLength={[40, 60]}
            />
          </div>
        </div>
      </SideNavBar>
    </div>
  );
};

export default Activity;

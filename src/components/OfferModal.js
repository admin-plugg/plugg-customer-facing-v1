import React from "react";
import styles from "./Style/RewardModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const OfferModal = ({ setOfferModalOpen, OfferCoupn }) => {
  return (
    <div
      className={styles.modalBackground}
      style={{ position: "fixed", zIndex: "2" }}
    >
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOfferModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.modaltitle}>
          <h1>Offer Details</h1>
        </div>
        <hr style={{ width: "100%" }} />
        <div className={styles.modalbody}>
          <div>
            <h5 className={styles.coupnDetail}> "Yahoo! Free Hotel Stay!" </h5>
            <b>
              <p className={styles.coupunCode}>
                XYZPLUGG{OfferCoupn}
                <span>
                  <FontAwesomeIcon
                    size="xs"
                    style={{ marginLeft: "2%", color: "black" }}
                    icon={faCopy}
                    onClick={() => {
                      {
                        navigator.clipboard.writeText(this.state.textToCopy);
                      }
                    }}
                  />
                </span>
              </p>
            </b>
            <i style={{ fontSize: "12px" }}>
              Copy & Paste this coupon code while checking out
            </i>
          </div>
        </div>
        <div className={styles.modalfooter}>
          <button
            onClick={() => {
              setOfferModalOpen(false);
            }}
            id={styles.cancelBtn}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;

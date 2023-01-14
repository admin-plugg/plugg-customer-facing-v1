import React from "react";
import styles from "./Style/RewardModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

const DiscountModal = ({ setDiscountModalOpen, DiscountCoupn }) => {
  return (
    <div
      class={styles.modalBackground}
      style={{ position: "fixed", zIndex: "2" }}
    >
      <div class={styles.modalContainer}>
        <div class={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setDiscountModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div class={styles.modaltitle}>
          <h1>Discount Details</h1>
        </div>
        <hr style={{ width: "100%" }} />
        <div class={styles.modalbody}>
          <div>
            <h5 class={styles.coupnDetail}>FLAT {DiscountCoupn}% OFF !!! </h5>
            <b>
              <p class={styles.coupunCode}>
                LOPLUGG{DiscountCoupn}
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
        <div class={styles.modalfooter}>
          <button
            onClick={() => {
              setDiscountModalOpen(false);
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

export default DiscountModal;

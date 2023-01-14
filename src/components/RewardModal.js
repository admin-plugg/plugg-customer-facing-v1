import React, { useState } from "react";
import styles from "./Style/RewardModal.module.css";
import DiscountModal from "./DiscountModal";
import OfferModal from "./OfferModal";

const RewardModal = ({
  setOpenModal,
  ActiveRewardNo,
  Offer,
  Discount,
  OfferCoupn,
  DiscountCoupn,
}) => {
  const [discountModalOpen, setDiscountModalOpen] = useState(false);
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  const discountsModalForm = () => {
    return (
      <div>
        {discountModalOpen && (
          <DiscountModal
            DiscountCoupn={DiscountCoupn}
            setDiscountModalOpen={setDiscountModalOpen}
          />
        )}
      </div>
    );
  };

  const offerModalForm = () => {
    return (
      <div>
        <div>
          {offerModalOpen && (
            <OfferModal
              OfferCoupn={OfferCoupn}
              setOfferModalOpen={setOfferModalOpen}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      class={styles.modalBackground}
      style={{ position: "fixed", zIndex: "2" }}
    >
      <div class={styles.modalContainer}>
        <div class={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div class={styles.modaltitle}>
          <h1 style={{ fontSize: "40px", marginBottom: "0", marginTop: "1%" }}>
            Reward Details
          </h1>
        </div>
        <hr style={{ width: "100%" }} />
        <div class={styles.modalbody}>
          <div>
            <p class={styles.rewaredTitles}>
              {" "}
              <b>{Discount}</b>{" "}
            </p>
            {ActiveRewardNo > 0 ? (
              <button
                onClick={() => {
                  setDiscountModalOpen(true);
                }}
                class={styles.redeemButton}
              >
                Redeem Now
              </button>
            ) : (
              <button class={styles.redeemButton} disabled>
                Redeem Now
              </button>
            )}
            {discountsModalForm()}
          </div>
          <div>
            <p class={styles.rewaredTitles}>
              <b> {Offer}</b>
            </p>
            {ActiveRewardNo > 1 ? (
              <button
                onClick={() => {
                  setOfferModalOpen(true);
                }}
                class={styles.redeemButton}
              >
                Redeem Now
              </button>
            ) : (
              <button class={styles.redeemButton} disabled>
                Redeem Now
              </button>
            )}
            <i style={{ color: "grey", fontSize: "12px", marginTop: "0" }}>
              This offer will be activated after 3 successfull orders
            </i>
            {offerModalForm()}
          </div>
        </div>
        <div class={styles.modalfooter}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id={styles.cancelBtn}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardModal;

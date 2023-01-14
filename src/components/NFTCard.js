import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../pages/Style/ViewNFT.module.css";
import RewardModal from "./RewardModal";
import PolygonLogo from "../img/PolygonLogo.png";

const NFTCard = ({
  NftImage,
  NftTitle,
  NftDesc = "Airdrop NFT",
  ActiveRewardNo = 2,
  Offer = "30% OFF on all your Orders",
  Discount = "Ticket to Sunburn",
  OfferCoupn = "ITC",
  DiscountCoupn = 30,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const RewardsModal = () => {
    return (
      <div>
        {modalOpen && (
          <RewardModal
            Offer={Offer}
            Discount={Discount}
            OfferCoupn={OfferCoupn}
            DiscountCoupn={DiscountCoupn}
            ActiveRewardNo={ActiveRewardNo}
            setOpenModal={setModalOpen}
          />
        )}
      </div>
    );
  };

  return (
    <div className={styles.column}>
      <div className={styles.card}>
        <img
          class={modalOpen ? styles.viewNFTBackground : ""}
          src={NftImage}
          alt="NFT"
          style={{ width: "100%" }}
        />
        <div className={styles.cardContainer}>
          <div style={{ width: "100%", height: "33px" }}>
            <p
              style={
                modalOpen
                  ? { filter: "blur(4px)", textAlign: "left", marginLeft: "2%" }
                  : { textAlign: "left", marginLeft: "2%" }
              }
            >
              <span class={styles.nftTitle}>{NftTitle}</span>{" "}
              <span class={styles.nftDesc}>{NftDesc}</span>{" "}
            </p>
            <a
              href="https://mumbai.polygonscan.com/token/0x28c05ed93f56a0c97ec3cb348e9a19a1b87c4b72"
              target="._blank"
            >
              <img
                style={modalOpen ? { filter: "blur(4px)" } : {}}
                class={styles.polygonlogo}
                src={PolygonLogo}
                alt=""
              />
            </a>
          </div>

          {RewardsModal()}
          <button
            class={styles.openModalBtn}
            style={modalOpen ? { filter: "blur(4px)" } : {}}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            View Rewards
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

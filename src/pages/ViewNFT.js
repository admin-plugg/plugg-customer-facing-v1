import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import styles from "./Style/ViewNFT.module.css";
import GoldNFT from "../img/Gold.png";
import SilverNFT from "../img/Silver.png";
import DiamondNFT from "../img/cropDiamond.gif";
import NFTCard from "../components/NFTCard";

const ViewNFT = () => {
  return (
    <div>
      <SideNavBar>
        <div className={styles.row}>
          <NFTCard
            NftImage={SilverNFT}
            NftTitle={"Welcome"}
            NftDesc="Airdrop NFT"
            ActiveRewardNo={1}
            Offer="Free Movie Tickets in INOX"
            Discount="10% OFF on 1st Order"
            DiscountCoupn={10}
          />
          <NFTCard
            NftImage={GoldNFT}
            NftTitle={"Buddy"}
            NftDesc="Rarity 30/100"
            ActiveRewardNo={2}
            Discount="20% Off an 2 orders"
            Offer="Ticket to Sunburn"
            DiscountCoupn={20}
            OfferCoupn="ITC"
          />
          <NFTCard
            NftImage={DiamondNFT}
            NftTitle={"SuperFan"}
            NftDesc="Exclusive"
            ActiveRewardNo={0}
            Discount="40% OFF on 3 orders"
            Offer="Free 1 Night stay at ITC"
          />
        </div>
      </SideNavBar>
    </div>
  );
};

export default ViewNFT;

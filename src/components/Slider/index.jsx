import React from "react";
import "./style.css";

export default function Slider() {
  return (
    <div id="story">
      <div
        className="container mb-5"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="tittle text-center t-shadow pt-3 pb-3">Story</h1>
        <div className="card">
          <div className="card-body text-justify">
            Since time immemorial, bees and man have lived in harmony. As
            recently as 10,000 years ago they have lived and maintained a sort
            of reciprocal lifestyle with one helping the other…. Until recently.
            Man has since become greedy in their industrial exploits and in turn
            have threatened the foundation of bee life. In an attempt to save
            their species, the Hive has birthed four rebellious queens who have
            brought with them 2,000 of their most loyal companions to the solana
            blockchain in an effort to save not only themselves but the World
            and the Metaverse. Unfortunately, they can’t do it by themselves;
            they need YOU to help them on their journey because “The World and
            the Metaverse NEEDZ BEEZ”.
          </div>
        </div>
      </div>
      <div data-aos="fade-right">
        <h1 className="tittle text-center t-shadow">Featured Needz Beez</h1>
        <div className="slider mb-5">
          <div className="slider-row"></div>
        </div>
      </div>
    </div>
  );
}

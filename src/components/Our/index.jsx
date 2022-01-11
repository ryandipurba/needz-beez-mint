import React from "react";
import "./style.css";

export default function Our() {
  return (
    <div className="pb-5" style={{ position: "relative" }}>
      <div
        className="container mb-5"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {/* svg */}
        <div className="custom-shape-divider-bottom-1641775128">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* end svg */}
        <h1 className="tittle text-center t-shadow pt-3 pb-3"> Our Items</h1>
        <div className="card">
          <div className="card-body text-justify">
            Needz Beez NFTs are a collection of 8000 digital art pieces of the
            world’s most prominent bees minted on the Solana Blockchain. This
            collection is based on 4 beehives; the bumblebee, leafcutter bee,
            honey bee, and the killer bee. Our unique artwork has 8 properties ,
            4 of which are 1-of-1, with more than 100 traits reflecting the
            exotic nature of bees on which human existence depends.
          </div>
        </div>
      </div>
      <div
        className="container mb-5"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 className="tittle text-center t-shadow pt-3 pb-3"> Our founders</h1>
        <div className="card">
          <div className="card-body text-justify">
            Our founders, out of love for the environment and a sweet tooth for
            honey, created Needz Beez. At Needz Beez, We believe in NFTs as
            being a means to provide charitable contributions by providing
            utility benefits to the holders. Furthermore, our digital art pieces
            can develop support networks for charitable contributions and other
            conservatory efforts.
          </div>
        </div>
      </div>
    </div>
  );
}

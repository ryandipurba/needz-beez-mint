import React from "react";
import "./style.css";
import Discord from "../../assets/image/discord.svg";
import Twitter from "../../assets/image/twitter.svg";
import Instagram from "../../assets/image/instagram.svg";

export default function Footer() {
  return (
    <footer
      className="text-center text-white sticky-bottom"
      // style={{ backgroundColor: "#f1f1f1" }}
    >
      {/* <!-- Grid container --> */}
      <div className="container pt-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Discord --> */}
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://discord.gg/pxcZAsJ8"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <img src={Discord} alt="" />
          </a>
          {/* <!-- Instagram --> */}
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://www.instagram.com/needzbeez"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <img src={Instagram} alt="" />
          </a>
          {/* <!-- Twitter --> */}
          <a
            className="btn btn-link btn-floating btn-lg m-1"
            href="https://twitter.com/NeedzBeezNft"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <img src={Twitter} alt="" />
          </a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Needz Beez
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

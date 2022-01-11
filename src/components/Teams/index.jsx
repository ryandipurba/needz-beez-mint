/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Teams() {
  return (
    <div style={{ backgroundColor: "#373c3e" }} id="team">
      <div className="container members">
        <div className="row justify-content-center mb-3">
          <div className=" text-center">
            <h1 className="mb-3 mt-5 tittle t-shadow">Meet Our Team</h1>
            <p className="lead"></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow border-0 mb-4" data-aos="fade-right">
              <div className="row no-gutters">
                <div className="col-md-5 pro-pic king"></div>
                <div className="col-md-7 bg-white">
                  <div className="p-4">
                    <h6 className=" ">King Honey Comb</h6>
                    <span className="position">CEO/Founder </span>
                    <p className="text-justify desc mt-2">
                      Environmental Enthusiast and Gaming Nerd Three years
                      Experience in CryptoCurrency. Avid NFT Collector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow border-0 mb-4" data-aos="fade-left">
              <div className="row no-gutters card-shadow">
                <div className="col-md-5 pro-pic finezze"></div>
                <div className="col-md-7 bg-white">
                  <div className="p-4">
                    <h6 className="  ">Finezze Bee-Ner0</h6>
                    <span className="position">
                      {" "}
                      Lead Developer/Marketing Consultant
                    </span>
                    <p className="desc mt-2">
                      - Nature Lover and Honey Connoisseur <br /> - 9 years
                      Marketing Experience <br /> - 3 years Network Engineering
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="card card-shadow border-0 mb-4"
              data-aos="fade-right"
            >
              <div className="row no-gutters shadow">
                <div className="col-md-5 pro-pic pablo"></div>
                <div className="col-md-7 bg-white">
                  <div className="p-4">
                    <h6 className="  ">Pablo Beecaso</h6>
                    <span className="position">Artist/Designer</span>
                    <p className="desc mt-2">
                      - Self Employed Artist and Computer Geek
                      <br />- 2 Years Cyber Security Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="card card-shadow border-0 mb-4"
              data-aos="fade-left"
            >
              <div className="row no-gutters shadow">
                <div className="col-md-5 pro-pic bee"></div>
                <div className="col-md-7 bg-white">
                  <div className="p-4">
                    <h6 className="  ">Bee Gates </h6>
                    <span className="position">
                      Expert Blockchain Developer
                    </span>
                    <p className="desc mt-2">Site Developer/Technician </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <div>
      <section
        className="accordion-section clearfix mt-3"
        aria-label="Question Accordions"
        data-aos="zoom-in"
      >
        <div className="container">
          <h1 className="text-center t-shadow tittle pt-3 pb-3" id="faq">
            FAQS
          </h1>
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse0"
                    aria-expanded="true"
                    aria-controls="collapse0"
                  >
                    Why bees?
                  </a>
                </h3>
              </div>
              <div
                id="collapse0"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading0"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    Pollinating Bees are some of the hardest working & most
                    important creatures on the planet. Bees and other
                    pollinators are responsible for every third mouthful we eat.
                    For years, we have decimated the way of Life for one of the
                    world’s oldest food producers to a point of extinction. Now
                    it is time to make a change! With the help of an active Bee
                    Community, we can start the Bee Revolution!!{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    What inspired Needz Beez Hive?
                  </a>
                </h3>
              </div>
              <div
                id="collapse1"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading1"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    This project has been created by a team of Nature & NFT
                    enthusiasts. We believe in NFTs as an expressive way to
                    provide charitable contributions through utility benefits
                    for the holders. Furthermore, as an instrument to develop
                    support networks for charitable contribution and other
                    conservatory efforts.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    What are Needz Beez NFTs?
                  </a>
                </h3>
              </div>
              <div
                id="collapse2"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    Needz Beez NFTs are a collection of 8,000 digital art pieces
                    of bees minted on the Solana blockchain. Owning a Needz Beez
                    NFT will give you access to very exclusive events and
                    features : charity donations, hive sponsoring, P2E
                    Blockchain game, percentage of royalties, community DAO, NFT
                    staking, Exclusive Needz Beez Merchandise and Giveaways.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    How many Traits and Attributes ?
                  </a>
                </h3>
              </div>
              <div
                id="collapse3"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading3"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    Our unique collection has 8 total properties and 100+ traits
                    based around 4 of the world's most famous bees (BumbleBee,
                    Honey Bee, Leaf Cutter Bee, AND Killer Bee). Which hive will
                    you join?
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    When will I be able to own my own Needz Beez NFT??
                  </a>
                </h3>
              </div>
              <div
                id="collapse4"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    The bees will be released from The Hive in February, no
                    specific date yet.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    Where can I get my Needz Beez NFT?
                  </a>
                </h3>
              </div>
              <div
                id="collapse5"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    You can get your hands on a Needz Beez NFT at NeedzBeez.io
                    on Mint Day or by purchasing one on select secondary
                    marketplaces (TBA).
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    What is the cost of a mint?
                  </a>
                </h3>
              </div>
              <div
                id="collapse6"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>0.5 Sol Pre sale (Whitelist only), 1 Sol Public Sale </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse7"
                    aria-expanded="true"
                    aria-controls="collapse7"
                  >
                    How to Join The Whitelist?
                  </a>
                </h3>
              </div>
              <div
                id="collapse7"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    You must invite 15 people to the discord, 10 of which stay{" "}
                    <br />
                    OR
                    <br />
                    You must also participate in 1 conservation effort, take a
                    photo to post on social media and Tag needz Beez. These can
                    be 1 of 3 things.
                  </p>
                  <ol>
                    <li>make a bee bath in your garden</li>
                    <li>plant a set of flowers or trees</li>
                    <li>make a bee hotel for solitary bees</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse8"
                    aria-expanded="true"
                    aria-controls="collapse8"
                  >
                    Are Needz Beez supporting charities?
                  </a>
                </h3>
              </div>
              <div
                id="collapse8"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    Yes! The Needz Beez Foundation will allocate up to 20% of
                    sales & royalties. managed through a DAO, to help worldwide
                    bees. Join the Discord server to make an impact and learn
                    more.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                <h3 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    title=""
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse9"
                    aria-expanded="true"
                    aria-controls="collapse9"
                  >
                    How can I get in touch?
                  </a>
                </h3>
              </div>
              <div
                id="collapse9"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="heading2"
              >
                <div className="panel-body px-3 mb-4">
                  <p>
                    Follow us on Discord, Twitter, and Instagram. The best place
                    for regular updates and announcements is the Needz Beez
                    Discord!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

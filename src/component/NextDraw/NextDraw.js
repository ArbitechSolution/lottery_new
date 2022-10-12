import React from "react";
import "./NextDraw.css";
function NextDraw() {
  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="col-12">
          <h2 className="nextfrawh2">Get your tickets now!</h2>
          <span className="nextdrawspan mt-4">5h 7m until the draw</span>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-2 mb-2">
        <div className="col-lg-8 buyTicketBox">
          <div className="buyTicketBoxMini">
            <p className="nextdraw-p ps-3 pt-3">
              Match the winning number in the same order to share prizes.
              Current prizes up for grabs:
            </p>
            <div className="row">
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 1</h5>
                <span className="ps-3 CAKE-span">502 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$2,275</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 2</h5>
                <span className="ps-3 CAKE-span">754 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$3,417</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 3</h5>
                <span className="ps-3 CAKE-span">1,256 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$5,694</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 4</h5>
                <span className="ps-3 CAKE-span">2,512 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$2,275</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 5</h5>
                <span className="ps-3 CAKE-span">10,047 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$2,275</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Match first 6</h5>
                <span className="ps-3 CAKE-span">5,024 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$22,774</span>
              </div>
              <div className="col-lg-3 text-start mb-3 mt-3">
                <h5 className="Match-p ps-3">Burn</h5>
                <span className="ps-3 CAKE-span">5,024 CAKE</span><br/>
                <span className="ps-3 CAKE-span1">~$22,770</span>
              </div>
            </div>
            {/* <div className="row d-flex justify-content-center mt-3">
              <div className="col-11 d-flex justify-content-between align-items-center">
                <span className="nextspan">Next Draw</span>
                <span className="nextspanone">
                  #655 | Draw: Sep 13, 2022, 5:00 AM
                </span>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-11 buyTicketBox mb-3 ">
                <div className="row">
                  <div className="col-lg-5 d-flex justify-content-between align-items-center ps-3">
                    <span className="nextspanone">Prize Pot</span>
                    <span className="nextspan fs-2 fw-bold">~$92,151</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 d-flex justify-content-between align-items-center ps-3">
                    <span className="nextspanone">Prize Pot</span>
                    <span className="nextspan ">
                      You have 0 ticket this round
                    </span>
                  </div>
                  <div className="col-md-4 pb-3">
                    <div className="d-grid gap-2">
                      <button
                        className="buyTicketBox-button-trensparent"
                        size="md"
                      >
                        Buy Instantly
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NextDraw;

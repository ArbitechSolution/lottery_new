import React, { useState, useEffect } from "react";
import "./Classic.css";
import BabyLogo from "../../Assets/Babylonia_Logo.png";
function ClassicLotteryComponent() {
  const [winnerNumber, setWinnerNumber] = useState(0);
  const [hours, setHours] = useState("00");
  const [second, setSecond] = useState("00");
  const handleTimeFornextDraw = () => {
    setHours("00");
    setSecond("00");
  };
  const handlePreviousLotteryWinner = () => {};

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-12 buyTicketBoxClass">
          <div className="buyTicketBoxMiniClassic">
            <div className="row ">
              <div className="col cardLogo">
                <img src={BabyLogo} alt="" />
              </div>
            </div>
            <p className="buyTicketSpan mt-2" style={{ paddingLeft: "20px" }}>
              CLASSIC LOTTERY
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic1 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Prize Pool</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText inputClassic spanCol">
                    <span className="spanAmount">000.00</span>
                    <span className="spanAmount2">~$ 000.00</span>
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic2 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Next Draw</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="inputClassic spanWinner">
                      {hours}h &nbsp; {second}m
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic3 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Last Winner</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="inputClassic spanWinner">
                      {winnerNumber ? winnerNumber : "0000"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-4">
                <div className="col-md-8">
                  <div className="d-grid gap-2">
                    <button
                      className="buyTicketBox-button-connect"
                      size="lg"
                      // onClick={() => handleConnect()}
                    >
                      {/* {account === "No Wallet"
                        ? "Connect Wallet"
                        : account === "Connect Wallet"
                        ? "Connect Wallet"
                        : account === "Wrong Network"
                        ? account
                        : account.substring(0, 4) +
                          "..." +
                          account.substring(account.length - 4)} */}
                      Buy Tickets
                    </button>
                    {/* {open && <ConnectWalletModal >} */}
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

export default ClassicLotteryComponent;

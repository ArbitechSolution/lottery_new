import React, { useState } from "react";
import "./AllHistory.css";

function AllHistory() {
  const [inputField, setInputField] = useState(0);
  const [winnerNumber, setWinnerNumber] = useState(0);

  const handleMinus = () => {
    if (inputField > 0) {
      setInputField(inputField - 1);
      setWinnerNumber(1000 * (inputField - 1));
    }
  };
  const handlePlus = () => {
    setInputField(inputField + 1);
    setWinnerNumber(1000 * (inputField + 1));
  };
  const handleLotteryOnChange = (e) => {
    if (e.target.value >= 0) {
      setInputField(e.target.value);
      handleLotteryWinner(1000 * e.target.value);
    } else {
      handleLotteryWinner(0);
    }
  };
  const handleLotteryWinner = (value) => {
    setWinnerNumber(value);
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-12 buyTicketBoxClass">
          <div className="buyTicketBoxMiniClassic">
            <div className="historyHeader">
              <p className="buyTicketSpanAlHistory mt-2 ms-1">ALL History</p>
              <p className="buyTicketSpanAlHistory mt-2 me-1">YOUR HISTORY</p>
            </div>
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
                  <div className="col-lg-4 mt-2 mb-2 divInputText">
                    <span className="spanText">Round</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span
                      className="lessAndGreaterThen me-1"
                      onClick={() => {
                        handleMinus();
                      }}
                    >
                      &lt;
                    </span>
                    <input
                      type="number"
                      className="inputClassicRound "
                      placeholder="0000"
                      onChange={(e) => {
                        handleLotteryOnChange(e);
                      }}
                      value={inputField}
                    />
                    <span
                      className="lessAndGreaterThen ms-1"
                      onClick={() => {
                        handlePlus();
                      }}
                    >
                      &gt;
                    </span>
                    <span className="lessAndGreaterThen ms-2">First</span>
                    <span className="lessAndGreaterThen ms-2 me-1">Last</span>
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic3 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Winner Number</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="inputClassic spanWinner">
                      {winnerNumber ? winnerNumber : "0000"}
                    </span>
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

export default AllHistory;

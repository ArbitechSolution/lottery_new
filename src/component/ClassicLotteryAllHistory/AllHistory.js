import React, { useEffect, useState } from "react";
import "./AllHistory.css";
import { useSelector, useDispatch } from "react-redux";
import { BabyAbI, BabyAddress } from "../../component/Utils/baby";
import { GetAppRounded } from "@mui/icons-material";
import { toast } from "react-toastify";
function AllHistory() {
  const [inputField, setInputField] = useState(0);
  const [winnerNumber, setWinnerNumber] = useState(0);
  let account = useSelector((state) => state.connect?.connection);

  const handleMinus = () => {
    if (inputField > 0) {
      setInputField(inputField - 1);
      handleLotery(inputField - 1);
    }
  };
  const handlePlus = () => {
    setInputField(inputField + 1);
    handleLotery(inputField + 1);
  };
  const handleLotteryOnChange = (e) => {
    if (e.target.value >= 0) {
      setInputField(e.target.value);
      handleLotery(e.target.value);
    } else {
      handleLotery(0);
    }
  };
  function reversedNum(num) {
    return (
      parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
    );
  }
  const handleLotery = async (id) => {
    try {
      if (account == "No Wallet") {
        toast.info("No Wallet");
      } else if (account == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (account == "Connect Wallet") {
        toast.info("Please Connect Wallet First!");
      } else {
        const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        let finalLotteryNumber = await lotteryContract.methods
          .viewLottery(id)
          .call();
        // console.log(
        //   "finalLotteryNumber",
        //   finalLotteryNumber.amountCollectedInBABY
        // );
        let finalNumber = finalLotteryNumber.finalNumber;
        finalNumber = finalNumber % 1000000;
        let num = reversedNum(finalNumber);
        // console.log("num", finalLotteryNumber);
        if (num.toString().length == 6) {
          num = num.toString();
        } else if (num.toString().length == 5) {
          num = num.toString() + "0";
        } else if (num.toString().length == 4) {
          num = num.toString() + "00";
        } else if (num.toString().length == 3) {
          num = num.toString() + "000";
        } else if (num.toString().length == 2) {
          num = num.toString() + "0000";
        } else if (num.toString().length == 1) {
          num = num.toString() + "00000";
        } else {
          num = num.toString() + "000000";
        }

        setWinnerNumber(num);
      }
    } catch (error) {
      console.log("error while setting lottery");
    }
  };
  const GetRound = async () => {
    try {
      if (account == "No Wallet") {
        console.log("No Wallet");
      } else if (account == "Wrong Network") {
        console.log("Wrong Network");
      } else if (account == "Connect Wallet") {
        console.log("Please Connect Wallet First!");
      } else {
        const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        const id = await lotteryContract.methods.viewCurrentLotteryId().call();
        const values = await lotteryContract.methods.viewLottery(id).call();
        if (values.status == 1) {
          setInputField(id - 1);
          handleLotery(id - 1);
        } else {
          setInputField(id);
          handleLotery(id);
        }
      }
    } catch (error) {
      console.log("error while getting Round");
    }
  };

  const firstLotteryId = async () => {
    try {
      if (account == "No Wallet") {
        console.log("No Wallet");
      } else if (account == "Wrong Network") {
        console.log("Wrong Network");
      } else if (account == "Connect Wallet") {
        console.log("Please Connect Wallet First!");
      } else {
        const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        const id = await lotteryContract.methods.viewCurrentLotteryId().call();
        const values = await lotteryContract.methods.viewLottery(id).call();

        if (id > 1) {
          setInputField(1);
          handleLotery(1);
        } else {
          handleLotery(0);
          setInputField(0);
        }
      }
    } catch (error) {
      console.log("error while getting Round");
    }
  };
  const lastLotteryId = async () => {
    try {
      if (account == "No Wallet") {
        console.log("No Wallet");
      } else if (account == "Wrong Network") {
        console.log("Wrong Network");
      } else if (account == "Connect Wallet") {
        console.log("Please Connect Wallet First!");
      } else {
        const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        const id = await lotteryContract.methods.viewCurrentLotteryId().call();
        const values = await lotteryContract.methods.viewLottery(id).call();
        if (values.status == 1) {
          setInputField(id - 1);
          handleLotery(id - 1);
        } else {
          setInputField(id);
          handleLotery(id);
        }
      }
    } catch (error) {
      console.log("error while getting Round");
    }
  };
  useEffect(() => {
    GetRound();
  }, [account]);
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
                    <span
                      className="lessAndGreaterThen ms-2"
                      onClick={() => {
                        firstLotteryId();
                      }}
                    >
                      First
                    </span>
                    <span
                      className="lessAndGreaterThen ms-2 me-1"
                      onClick={() => {
                        lastLotteryId();
                      }}
                    >
                      Last
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic3 mt-2">
                <div className="row  ">
                  <div className="col-6 mt-2 mb-2 divInputText">
                    <span className="spanText">Winner Number</span>
                  </div>
                  <div className="col-6 mt-2 mb-2 divInputText">
                    <span className="inputClassic spanWinner">
                      {winnerNumber ? winnerNumber : "000000"}
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

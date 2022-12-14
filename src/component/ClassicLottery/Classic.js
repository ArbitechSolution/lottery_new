import React, { useState, useEffect } from "react";
import "./Classic.css";
import BabyLogo from "../../Assets/Babylonia_Logo.png";
import { useSelector } from "react-redux";
import { BabyAbI, BabyAddress } from "../../component/Utils/baby";
import { toast } from "react-toastify";
function ClassicLotteryComponent() {
  const [lastWinnerNumber, setLastWinnerNumber] = useState(0);
  const [inputField, setInputField] = useState(0);
  let account = useSelector((state) => state.connect?.connection);
  const [hours, setHours] = useState("00");
  const [second, setSecond] = useState("00");
  const handleTimeFornextDraw = async() => {
    const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        const id = await lotteryContract.methods.viewCurrentLotteryId().call();
        let finalLotteryNumber = await lotteryContract.methods.getTime(id).call();
         let hours = finalLotteryNumber/60;
         let rHours = Math.floor(hours)
         let minutes = (hours - rHours)*60
         console.log("minutes", minutes);
         let rMinutes = Math.round(minutes)
        //  rMinutes = rMinutes + 1
    setHours(rHours);
    setSecond(rMinutes);
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
        let finalNumber = finalLotteryNumber.finalNumber;
        finalNumber = finalNumber % 1000000;
        let num = reversedNum(finalNumber);
        if (num.toString().length == 5) {
          num = "0" + num.toString();
        }
        setLastWinnerNumber(num);
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
        handleLotery(id - 1);
      }
    } catch (error) {
      console.log("error while getting Round");
    }
  };
  useEffect(() => {
    GetRound();
  }, [account]);
useEffect(()=>{
  setInterval(()=>{
    handleTimeFornextDraw()
  },60000)
  handleTimeFornextDraw()

})
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
                  <div className=" col-6 mt-2 mb-2 divInputText">
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
                      {lastWinnerNumber ? lastWinnerNumber : "000000"}
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

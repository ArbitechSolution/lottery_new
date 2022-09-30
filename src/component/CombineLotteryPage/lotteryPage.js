import React from "react";
import BuyPointOne from "../BuyPointOne/BuyPointOne";
import BuyTickets from "../BuyTickets/BuyTickets";
import Footer from "../Footer";

function LotteryPage() {
  return (
    <div className="container lotteryPage ">
      <div className="row d-flex justify-content-center mt-2 mb-2">
        <div className="col-lg-5">
          <BuyTickets />
        </div>
        <div className="col-lg-5">
          <BuyPointOne />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LotteryPage;

import React from "react";
import BuyPointOne from "../../component/BuyPointOne/BuyPointOne";
import BuyTickets from "../../component/BuyTickets/BuyTickets";

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
    </div>
  );
}

export default LotteryPage;

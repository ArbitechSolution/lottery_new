import React from "react";
import BuyPointOne from "../BuyPointOne/BuyPointOne";
import BuyTickets from "../BuyTickets/BuyTickets";

function LotteryPage() {
  return (
    <div className="container">
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

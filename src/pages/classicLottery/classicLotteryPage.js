import React from "react";

import ClassicLotteryComponent from "../../component/ClassicLottery/Classic";
import AllHistory from "../../component/ClassicLotteryAllHistory/AllHistory";

function ClassicLottery() {
  return (
    <div className="container lotteryPage ">
      <div className="row d-flex justify-content-center mt-2 mb-2">
        <div className="col-lg-5">
          <ClassicLotteryComponent />
        </div>
        <div className="col-lg-5">
          <AllHistory />
        </div>
      </div>
    </div>
  );
}

export default ClassicLottery;

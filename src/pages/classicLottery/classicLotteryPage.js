import React from "react";

import ClassicLotteryComponent from "../../component/ClassicLottery/Classic";
import AllHistory from "../../component/ClassicLotteryAllHistory/AllHistory";
import HowToPlayLottery from "../../component/HowToPlayLottery/HowToPlayLottery";
import PrizePool from "../../component/PrizePool/PrizePool";
import WinningRules from "../../component/WinningRules/WinningRules";

function ClassicLottery() {
  return (
    <div className="container lotteryPage ">
      <div className="row d-flex justify-content-center mt-2 mb-2">
        <div className="col-lg-4 col-12">
          <ClassicLotteryComponent />
        </div>
        <div className="col-lg-4 col-12">
          <HowToPlayLottery />
        </div>
        <div className="col-lg-4 col-12">
          <AllHistory />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-2 mb-2">
        <div className="col-lg-6 col-12">
          <WinningRules />
        </div>
        <div className="col-lg-3 col-12">
          <PrizePool />
        </div>
      </div>
    </div>
  );
}

export default ClassicLottery;

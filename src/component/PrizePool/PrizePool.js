import React, { useState, useEffect } from "react";
import "./PrizePool.css";
import { useSelector, useDispatch } from "react-redux";

import { TokenAbI, TokenAddress } from "../Utils/token";
import BabyLogo from "../../Assets/Babylonia_Logo.png";
import One from "../../Assets/Group44.png";
import Two from "../../Assets/Group45.png";
import Three from "../../Assets/Group46.png";
function PrizePool() {
  const [open, setOpen] = useState(false);

  //   const [account, setAccount] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const [babyBalance, setBabyBalance] = useState(0);

  let account = useSelector((state) => state.connect?.connection);

  // useEffect(() => {
  //   getBabyBalance();
  // }, [account]);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-12 buyTicketBox ">
          <div className="buyTicketBoxMini pt-3 pb-3">
            <h3 className="buyTicketSpan  mt-2" style={{ paddingLeft: "20px" }}>
              PRIZE POOL
            </h3>
            <h6 className="textLeft mt-1">DIGITS MATCHED</h6>
            <div
              className="row d-flex justify-content-center "
              style={{ paddingLeft: "20px" }}
            >
              <div className="col-lg-12 col-12 cardParaDiv ms-1">
                <span>Matches first 1: 7.5 %</span>
                <span>Matches first 2: 10 %</span>
                <span>Matches first 3: 12.5 %</span>
                <span>Matches first 4: 15 %</span>
                <span>Matches first 5: 20 %</span>
                <span>Matches all 6 : 25 %</span>
                <span className="mt-4">Promotions & Marketing: 5%</span>
                <span>Buyback: 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizePool;

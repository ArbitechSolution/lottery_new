import React, { useState, useEffect } from "react";
import "./WinningRules.css";
import { useSelector, useDispatch } from "react-redux";

import { TokenAbI, TokenAddress } from "../Utils/token";
import BabyLogo from "../../Assets/Babylonia_Logo.png";
import One from "../../Assets/Group44.png";
import Two from "../../Assets/Group45.png";
import Three from "../../Assets/Group46.png";
function WinningRules() {
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
          <div className="buyTicketBoxMini pt-3 pb-4">
            <h3 className="buyTicketSpan  mt-2" style={{ paddingLeft: "20px" }}>
              WINNING RULES
            </h3>
            <div
              className="row d-flex justify-content-center "
              style={{ paddingLeft: "20px" }}
            >
              <div className="col-lg-7 col-12 cardParaDiv">
                <span className="rulesPara me-1">
                  The digits on your ticket must match in the correct order to
                  win.
                </span>
                <span className="rulesPara me-1">
                  Here’s an example lottery draw, with two tickets, A and B.
                  Ticket A: The first 3 digits and the last 2 digits match, but
                  the 4th digit is wrong, so this ticket only wins a “Match
                  first 3” prize.
                </span>
                <span className="rulesPara me-1">
                  Ticket B: Even though the last 5 digits match, the first digit
                  is wrong, so this ticket doesn’t win a prize.
                </span>
                <span className="rulesPara me-1">
                  Prize brackets don’t ‘stack’: if you match the first 3 digits
                  in order, you’ll only win prizes from the ‘Match 3’ bracket,
                  and not from ‘Match 1’ and ‘Match 2’.
                </span>
              </div>
              <div className="col-lg-5 col-12">
                <div className="row">
                  <div className="col ">
                    <img src={One} alt="lottery Number" className="oneImage" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col twoImages">
                    <img src={Two} alt="lottery Number" />
                    <img src={Three} alt="lottery Number" />
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

export default WinningRules;
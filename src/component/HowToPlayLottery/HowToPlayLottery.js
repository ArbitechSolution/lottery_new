import React, { useState, useEffect } from "react";
import "./HowToPlayLottery.css";
import info from "../../Assets/info-01_128px.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { loadWeb3 } from "../Api/api";
import { useSelector, useDispatch } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Box,
  Container,
  Flex,
  VStack,
  Image,
  Center,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import { TokenAbI, TokenAddress } from "../Utils/token";
import BabyLogo from "../../Assets/Babylonia_Logo.png";
import One from "../../Assets/one.png";
import Two from "../../Assets/two.png";
import Three from "../../Assets/three.png";
function HowToPlayLottery() {
  const [open, setOpen] = useState(false);

  //   const [account, setAccount] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [babyBalance, setBabyBalance] = useState(0);

  let account = useSelector((state) => state.connect?.connection);

  // useEffect(() => {
  //   getBabyBalance();
  // }, [account]);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-12 buyTicketBox">
          <div className="buyTicketBoxMini">
            <p className="buyTicketSpan mt-2" style={{ paddingLeft: "20px" }}>
              HOW TO PLAY
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 buyTicketBoxPlay">
                <div className="buyTicketBoxMiniPlay">
                  <div className="row">
                    <div className="col-3 p-3">
                      <img src={One} alt="" />
                    </div>
                    <div className="col-9 cardParaDiv">
                      <span className="cardHead">Buy Tickets</span>
                      <span className="cardHeadPara me-1">
                        Prices are set when the round starts, equal to 1 $BABY
                        per ticket.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-2">
              <div className="col-lg-10 buyTicketBoxPlay">
                <div className="buyTicketBoxMiniPlay">
                  <div className="row">
                    <div className="col-3 p-3">
                      <img src={Two} alt="" />
                    </div>
                    <div className="col-9 cardParaDiv">
                      <span className="cardHead">Wait for the Draw</span>
                      <span className="cardHeadPara me-1">
                        There is one draw every day alternating between 9 AM UTC
                        and 9 PM UTC.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-2 mb-5">
              <div className="col-lg-10 buyTicketBoxPlay">
                <div className="buyTicketBoxMiniPlay">
                  <div className="row">
                    <div className="col-3 p-3">
                      <img src={Three} alt="" />
                    </div>
                    <div className="col-9 cardParaDiv">
                      <span className="cardHead">Check for Prizes</span>
                      <span className="cardHeadPara me-1">
                        Once the round’s over, come back to the page and check
                        to see if you’ve won!
                      </span>
                    </div>
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

export default HowToPlayLottery;

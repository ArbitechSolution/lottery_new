import React, { useState, useEffect } from "react";
import "./Classic.css";
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
function ClassicLotteryComponent() {
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
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic" />
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic2 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Next Draw</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic" />
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic3 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Last Winner</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic " />
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

import React, { useState, useEffect } from "react";
import "./AllHistory.css";
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
function AllHistory() {
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
            {/* <div className="row ">
              <div className="col cardLogo">
                <img src={BabyLogo} alt="" />
              </div>
            </div> */}
            <div className="historyHeader">
              <p className="buyTicketSpanAlHistory mt-2 ms-1">ALL History</p>
              <p className="buyTicketSpanAlHistory mt-2 me-1">YOUR HISTORY</p>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic1 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Prize Pool</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic " />
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic2 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Round</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic " />
                  </div>
                </div>
              </div>
              <div className="col-10 buyTicketBoxClassic buyTicketBoxClassic3 mt-2">
                <div className="row  ">
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <span className="spanText">Winner #</span>
                  </div>
                  <div className="col-lg-5 mt-2 mb-2 divInputText">
                    <input type="number" className="inputClassic " />
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

export default AllHistory;

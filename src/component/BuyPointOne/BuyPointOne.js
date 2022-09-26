import React, { useEffect, useState } from "react";
import "./BuyPointOne.css";
import { useSelector, useDispatch } from "react-redux";
import info from "../../Assets/info-01_128px.png";
import { BiMinus, BiPlus } from "react-icons/bi";
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
  Flex,
  Center,
  Button,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
function BuyPointOne() {
  const [open, setOpen] = useState(false);
  const textTitleColor = useColorModeValue("black", "gray.100");
  const textColor = useColorModeValue("black", "gray.200");
  const { colorMode, toggleColorMode } = useColorMode();
  const [lotteryCard, setLotteryCard] = useState(false);
  const [lotteryBuyEnable, setlotteryBuyEnable] = useState(false);
  const bgColor = useColorModeValue("gray.300", "gray.700");
  const bgBoxColor = useColorModeValue("#E2E2E2", "FFFFFF");
  const buttonColor = useColorModeValue("#F58634", "#0E1555");
  const buttonTxtColor = useColorModeValue("gray.900", "gray.200");
  const [valueInput, setInputValue] = useState(0);
  const [costValue, setCostValue] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [babyBalance, setBabyBalance] = useState(0);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let account = useSelector((state) => state.connect?.connection);
  const handleConnect = async () => {
    dispatch(connectionAction());
    setLotteryCard(true);
  };
  const handleBuyInstantly = () => {
    console.log("into");
    setLotteryCard(true);
  };
  const handleConfirm = () => {
    console.log("handle with care");
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    if (e.target.value >= 0 && e.target.value <= 100) {
      setInputValue(e.target.value);
    }
  };
  useEffect(() => {
    document.getElementById("input").focus();
  });
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-7 buyTicketBox">
          <div className="buyTicketBoxMini">
            <p className="buyTicketSpan mt-4 text-center">Buy Tickets</p>
            <div className="row d-flex justify-content-center">
              <div className="col-11 buyTicketBox mb-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-11 d-flex justify-content-between ">
                    <span className="buyPointOneSpan">Buy:</span>
                    <span className="buyPointOneSpanOne">Tickets</span>
                  </div>
                  <div className="col-11 buyoneBox">
                    <div className="row">
                      <div className="col-lg-10">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="0"
                          id="input"
                          max={100}
                          min={1}
                          value={valueInput}
                          onChange={(e) => handleChangeInput(e)}
                        />
                      </div>
                      <div className="col-12 d-flex justify-content-end mb-2">
                        <span className="buyPointOneSpan">~0.00 BABY</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 text-end ">
                  <span className="InsufficientText">
                    Insufficient BABY balance
                  </span>
                  <br />
                  <span className="InsufficientTextOne">
                    BABY Balance: 0.000
                  </span>
                </div>
                <div className="row d-flex justify-content-around mt-3">
                  <div className="col-lg-5 buyoneBoxmini">
                    <span className="buyPointOneSpan">Max</span>
                  </div>
                  <div className="col-lg-5 buyoneBoxmini">
                    <span className="buyPointOneSpan">0</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">Cost (BABY)</span>
                    <span className="buyPointOneSpan">0 BABY</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">
                      <span className="fw-bold">0%</span>-Bulk discount
                    </span>
                    <span className="buyPointOneSpan">~0 BABY</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3  mb-4">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">You pay</span>
                    <span className="buyPointOneSpan fw-bold">~0 BABY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mt-3 mb-3">
              <div className="col-md-7">
                <div className="d-grid gap-2">
                  <button
                    className="buyTicketBox-button"
                    size="lg"
                    onClick={() => handleConnect()}
                  >
                    {account === "No Wallet"
                      ? "Connect Wallet"
                      : account === "Connect Wallet"
                      ? "Connect Wallet"
                      : account === "Wrong Network"
                      ? account
                      : account.substring(0, 4) +
                        "..." +
                        account.substring(account.length - 4)}
                  </button>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mb-3">
              <div className="col-md-7">
                <div className="d-grid gap-2">
                  <button
                    className="buyTicketBox-button"
                    size="lg"
                    // onClick={() => {
                    //   handleBuyInstantly();
                    // }}
                    onClick={onOpen}
                  >
                    Buy Instantly
                  </button>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mb-5">
              <div className="col-md-7">
                <div className="d-grid gap-2">
                  <button
                    className="buyTicketBox-button-trensparent"
                    size="lg"
                    onClick={onOpen}
                  >
                    View/Edit Number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        className="isCentered"
      >
        <ModalOverlay />
        <ModalContent mt={`130`} borderRadius="10px">
          <Flex>
            {/* <ModalCloseButton /> */}
            <Box
              w={["100%"]}
              borderRadius="10px"
              boxShadow="lg"
              p="7px"
              border={"1px"}
              backgroundColor={colorMode === "dark" ? "black" : "white"}
            >
              <Box
                p={"15px"}
                border="1px"
                borderRadius={"10px"}
                bg={colorMode === "dark" ? "#5C5C5C" : bgBoxColor}
              >
                {lotteryCard ? (
                  <div className="container-modal">
                    <div className="close">
                      <ModalCloseButton />
                    </div>
                    <div className="row d-flex justify-content-center mt-4 mb-4">
                      <h4 className="d-flex justify-content-center">
                        Edit Number
                      </h4>
                      <div className="col-lg-10 buyTicketBox mb-5">
                        <div className="buyTicketBoxMini">
                          <div className="row d-flex justify-content-center">
                            <div className="col-10 ">
                              <div className="row d-flex justify-content-between">
                                <div className="col-12 mt-2 mb-2 cost">
                                  <span>Total Cost:</span>
                                  <span>1.18 BABY</span>
                                </div>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-4 mb-2">
                              <div className="col-lg-12 col-11 ">
                                <span>
                                  Buy Instantly, chooses random numbers, with no
                                  duplicates among your tickets. Prices are set
                                  before each round starts, equal to $5 at that
                                  time. Purchases are final.
                                </span>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-4 mb-5">
                              <div className="col-11 buyoneBox">
                                <div className="row">
                                  <div className="col-lg-10">
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="0 0 0 0 0 0"
                                      id="input"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center mt-3 mb-5">
                        <div className="col-md-7">
                          <div className="d-grid gap-2">
                            <button
                              className="buyTicketBox-button"
                              size="lg"
                              onClick={() => handleConfirm()}
                            >
                              Confirm & Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Center my="10">
                    <Button
                      // focusBorderColor="none"
                      id="swap_button"
                      border="1px"
                      w="55%"
                      h="40px"
                      borderRadius="5"
                      color={colorMode === "dark" ? "white" : "black"}
                      backgroundColor={colorMode === "dark" ? "black" : "white"}
                      fontFamily="Ropa Sans"
                      fontSize={"19px"}
                      fontWeight="150"
                      onClick={() => {
                        setLotteryCard(true);
                      }}
                    >
                      Buy Ticket
                    </Button>
                  </Center>
                )}
              </Box>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default BuyPointOne;

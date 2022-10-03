import React, { useEffect, useState } from "react";
import "./BuyPointOne.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
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
import { TokenAbI, TokenAddress } from "../Utils/token";
import { BabyAbI, BabyAddress } from "../Utils/baby";
import BabyLogo from "../../Assets/Babylonia_Logo.png";

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
  const [valueInput, setInputValue] = useState("");
  const [eidtLotteryNumber, setEidtLotteryNumber] = useState([]);
  const [actualCost, setActualCost] = useState(0);
  const [costValue, setCostValue] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [babyBalance, setBabyBalance] = useState(0);
  const [percent, setPercent] = useState(0);
  const [approved, setApproved] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let account = useSelector((state) => state.connect?.connection);
  const handleConnect = async () => {
    dispatch(connectionAction());
    setLotteryCard(true);
  };
  const handleBuyInstantly = () => {
    setLotteryCard(true);
  };
  const handleConfirm = () => {
    getBuyTicket();
  };
  const handleChangeInput = (e) => {
    if (e.target.value >= 0 && e.target.value <= 100) {
      setInputValue(e.target.value);
      getCost();
      setEidtLotteryNumber("");
    } else {
      getCost();
    }
  };
  const getBabyBalance = async () => {
    try {
      if (account == "No Wallet") {
        console.log("no wallet");
      } else if (account == "Wrong Network") {
        console.log("wrong");
      } else if (account == "Connect Wallet") {
        console.log("not conneted ");
      } else {
        const web3 = window.web3;
        const tokenContract = new web3.eth.Contract(TokenAbI, TokenAddress);
        let balance = await tokenContract.methods.balanceOf(account).call();
        balance = web3.utils.fromWei(balance);
        balance = parseFloat(balance).toFixed(4);
        console.log("token balance", balance);
        setBabyBalance(balance);
      }
    } catch (error) {
      console.log("error while getting baby balance");
    }
  };
  const getCost = async () => {
    try {
      if (account == "No Wallet") {
        // toast.info("Not Connected");
        console.log("no wallet");
      } else if (account == "Wrong Network") {
        // toast.info("Not Connected");
        console.log("wrong");
      } else if (account == "Connect Wallet") {
        // toast.info("Not Connected");
        console.log("not conneted ");
      } else {
        const web3 = window.web3;
        const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
        const id = await lotteryContract.methods.viewCurrentLotteryId().call();
        const values = await lotteryContract.methods.viewLottery(id).call();
     

        if (valueInput == 0) {
          setBulkDiscount(0);
          setPercent(0);
          setCostValue(0);
          setActualCost(0);
        } else {
          let costForOne = await lotteryContract.methods
            .calculateTotalPriceForBulkTickets(
              values.discountDivisor,
              values.priceTicketInBABY,
              1
            )
            .call();
          costForOne = web3.utils.fromWei(costForOne);
          let val = costForOne * valueInput;
          setCostValue(val);

          let acutalCostForBuy = await lotteryContract.methods
            .calculateTotalPriceForBulkTickets(
              values.discountDivisor,
              values.priceTicketInBABY,
              valueInput
            )
            .call();
          acutalCostForBuy = web3.utils.fromWei(acutalCostForBuy);
          acutalCostForBuy = parseFloat(acutalCostForBuy).toFixed(4);
          console.log(acutalCostForBuy, "acutalCostForBuy");
          setActualCost(acutalCostForBuy);

          let discount = val - acutalCostForBuy;
          discount = parseFloat(discount).toFixed(4);
          setBulkDiscount(discount);

          let percentage = discount / val;
          percentage = percentage * 100;
          percentage = parseFloat(percentage).toFixed(2);
          setPercent(percentage);
        }
      }
    } catch (error) {
      console.log("error while getting baby balance");
    }
  };
  const handleEnable = async () => {
    let arrayOf = [];
    for (let i = 1; i <= valueInput; i++) {
      let num = random();
      arrayOf = [...arrayOf, num];
    }
    // setApproved(true);
    setEidtLotteryNumber(arrayOf);
    try {
      if (valueInput > 0) {
       
        if (parseFloat(actualCost) <= parseFloat(babyBalance)) {
        
          const web3 = window.web3;
          const tokenContract = new web3.eth.Contract(TokenAbI, TokenAddress);
       
          const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);

          const id = await lotteryContract.methods
            .viewCurrentLotteryId()
            .call();
          const values = await lotteryContract.methods.viewLottery(id).call();
          let acutalCostForBuy = await lotteryContract.methods
            .calculateTotalPriceForBulkTickets(
              values.discountDivisor,
              values.priceTicketInBABY,
              valueInput
            )
            .call();
          // let amount = web3.utils.toWei(acutalCostForBuy);
          await tokenContract.methods
            .approve(BabyAddress, acutalCostForBuy)
            .send({
              from: account,
            });
          // .on("receipt", (receipt) => {
          //   console.log("mintValue", receipt);
          // });
          setApproved(true);
          toast.success("Approved Sucessfully");
          console.log("token approveed");
        } else {
          toast.info("Insufficient Balance!");
        }
      } else {
        toast.info("Please input how many tickets you want to buy");
      }
    } catch (error) {
      toast.error("Transaction Failed");
      console.error("error while getting baby balance", error);
    }
  };
  const getBuyTicket = async () => {
    try {
      if (account == "No Wallet") {
        toast.info("Not Connected");
      } else if (account == "Wrong Network") {
        toast.info("Not Connected");
      } else if (account == "Connect Wallet") {
        toast.info("Not Connected");
      } else {
        if (approved == true) {
          const web3 = window.web3;
          const lotteryContract = new web3.eth.Contract(BabyAbI, BabyAddress);
          const id = await lotteryContract.methods
            .viewCurrentLotteryId()
            .call();
          console.log("viewCurrentLotteryId", id);
          let array = [];
          for (let i = 1; i <= valueInput; i++) {
            let num = random();
            array = [...array, num];
          }
          console.log("array and id", array, id);
          const result = await lotteryContract.methods
            .buyTickets(id, array)
            .send({ from: account });
          toast.success("Transaction Sucessful");
          setApproved(false);
        } else {
          toast.info("Please enable first !");
        }
      }
    } catch (error) {
      toast.error("Transaction Failed");
      console.log("error while getting baby balance", error);
    }
  };
  const random = () => {
    let randomNumber = 100000 + Math.floor(Math.random() * 900000);
    randomNumber = 1000000 + randomNumber;
    return randomNumber;
  };

  const handleLotteryNumberEdit = (e, item) => {

    if (e.target.value <= 999999) {
      for (let i = 0; i <= eidtLotteryNumber.length; i++) {
        if (eidtLotteryNumber[i] == item) {
          eidtLotteryNumber[i] = e.target.value;
        }
      }
      setEidtLotteryNumber(e.target.value);
    } else {
      toast.info("You can add only upto 6 digit number !");
    }
  };

  useEffect(() => {
    getBabyBalance();
    getCost();
  }, [account]);
  useEffect(() => {
    setTimeout(() => {
      getCost();
    }, 1000);
  }, [valueInput]);
  // useEffect(() => {
  //   handleLotteryNumberEdit();
  // }, [eidtLotteryNumber]);
  useEffect(() => {
    document.getElementById("input").focus();
  });
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-9 buyTicketBox">
          <div className="buyTicketBoxMini">
            <div className="row ">
              <div className="col cardLogo">
                <img src={BabyLogo} alt="" />
              </div>
            </div>
            <p className="buyTicketSpan mt-2" style={{ paddingLeft: "20px" }}>
              Buy Tickets
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-9 buyTicketBox mb-1">
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
                          value={valueInput}
                          onChange={(e) => handleChangeInput(e)}
                        />
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                        <span className="buyPointOneSpan">
                          ~{costValue} &nbsp;BABY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 text-end ">
                  {/* {babyBalance <= 0 && (
                    <span className="InsufficientText">
                      Insufficient BABY balance
                    </span>
                  )}
                  <br /> */}
                  <span className="InsufficientTextOne">
                    BABY Balance: {babyBalance}
                  </span>
                </div>
                <div className="row d-flex justify-content-around mt-2">
                  <div className="col-lg-5 buyoneBoxmini">
                    <span className="buyPointOneSpan">Max</span>
                  </div>
                  <div className="col-lg-5 buyoneBoxmini">
                    <span className="buyPointOneSpan">0</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-1">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">Cost (BABY)</span>
                    <span className="buyPointOneSpan">{costValue} BABY</span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-1">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">
                      {/* <span className="fw-bold">{percent}&nbsp;%</span>-Bulk
                      discount */}
                      <span>{percent}&nbsp;%</span>-Bulk discount
                    </span>
                    <span className="buyPointOneSpan">
                      ~{bulkDiscount} &nbsp; BABY
                    </span>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-1  mb-2">
                  <div className="col-11 d-flex justify-content-between">
                    <span className="buyPointOneSpan">You pay</span>
                    <span className="buyPointOneSpan ">
                      ~{actualCost} &nbsp; BABY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mt-2 mb-2">
              <div className="col-md-6">
                <div className="d-grid gap-2">
                  {lotteryCard == true ? (
                    <button
                      className="buyTicketBox-button"
                      size="lg"
                      onClick={() => handleEnable()}
                    >
                      Enable
                    </button>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mb-2">
              <div className="col-md-6">
                <div className="d-grid gap-2">
                  <button
                    className="buyTicketBox-button"
                    size="lg"
                    // onClick={() => {
                    //   handleBuyInstantly();
                    // }}
                    // onClick={onOpen}
                    onClick={() => {
                      getBuyTicket();
                    }}
                  >
                    Buy Instantly
                  </button>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mb-3">
              <div className="col-md-6">
                <div className="d-grid gap-2">
                  {approved ? (
                    <button
                      className="buyTicketBox-button-trensparent"
                      size="md"
                      onClick={onOpen}
                    >
                      View/Edit Number
                    </button>
                  ) : (
                    <button
                      className="buyTicketBox-button-trensparent"
                      size="md"
                      disabled
                      // onClick={onOpen}
                    >
                      View/Edit Number
                    </button>
                  )}
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
                {
                  //   lotteryCard && (
                  <div className="container-modal">
                    <div className="close">
                      <ModalCloseButton />
                    </div>
                    <div className="row d-flex justify-content-center ">
                      <h4 className="d-flex justify-content-center">
                        Edit Number
                      </h4>
                      <div className="col-lg-10 buyTicketBox mb-3">
                        <div className="buyTicketBoxMini">
                          <div className="row d-flex justify-content-center">
                            <div className="col-10 ">
                              <div className="row d-flex justify-content-between">
                                <div className="col-12 mt-2 mb-2 cost">
                                  <span>Total Cost:</span>
                                  <span>{actualCost}&nbsp; BABY</span>
                                </div>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-2 mb-2">
                              <div className="col-lg-12 col-11 ">
                                <span>
                                  Buy Instantly, chooses random numbers, with no
                                  duplicates among your tickets. Prices are set
                                  before each round starts, equal to $5 at that
                                  time. Purchases are final.
                                </span>
                              </div>
                            </div>
                            <div className="row d-flex justify-content-center mt-3 mb-3">
                              {eidtLotteryNumber &&
                                eidtLotteryNumber.map((item, index) => {
                                  return (
                                    <div className="col-11 buyoneBox mt-1">
                                      <div className="row">
                                        <div className="col-lg-10 ">
                                          <input
                                            disabled
                                            type="number"
                                            className="form-control"
                                            placeholder="0   0   0   0   0   0"
                                            id="input"
                                            value={item}
                                            onChange={(e) => {
                                              handleLotteryNumberEdit(e, item);
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center mt-2 mb-2">
                        <div className="col-md-6">
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
                  //   )
                  // ) : (
                  //   <Center my="10">
                  //     <Button
                  //       // focusBorderColor="none"
                  //       id="swap_button"
                  //       border="1px"
                  //       w="55%"
                  //       h="40px"
                  //       borderRadius="5"
                  //       color={colorMode === "dark" ? "white" : "black"}
                  //       backgroundColor={colorMode === "dark" ? "black" : "white"}
                  //       fontFamily="Ropa Sans"
                  //       fontSize={"19px"}
                  //       fontWeight="150"
                  //       onClick={() => {
                  //         setLotteryCard(true);
                  //       }}
                  //     >
                  //       Buy Ticket
                  //     </Button>
                  //   </Center>
                  // )
                }
              </Box>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default BuyPointOne;

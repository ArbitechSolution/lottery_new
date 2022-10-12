import React, { useState, useEffect } from "react";
import "./BuyTickets.css";
import info from "../../Assets/info-01_128px.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { loadWeb3 } from "../Api/api";
import { useSelector, useDispatch } from "react-redux";
// import toast, { Toaster } from 'react-hot-toast';

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
import { toast } from "react-toastify";
import { BabyAbI, BabyAddress } from "../Utils/baby";
import Babylonia_token_2 from "../../Assets/Babylonia_token_2.png";
function BuyTickets() {
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
  //   const [account, setAccount] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [babyBalance, setBabyBalance] = useState(0);
  const [valueInput, setInputValue] = useState(1);
  const [eidtLotteryNumber, setEidtLotteryNumber] = useState([]);
  const [approved, setApproved] = useState(false);
  const [actualCost, setActualCost] = useState(0);
  const [costValue, setCostValue] = useState(0);
  const [bulkDiscount, setBulkDiscount] = useState(0);
  const [percent, setPercent] = useState(0);

  let account = useSelector((state) => state.connect?.connection);
  const handleConnect = async () => {
    setLotteryCard(true);
    dispatch(connectionAction());
  };
  const handleBuyInstantly = () => {
    setLotteryCard(true);
  };
  const handleConfirm = () => {
    getBuyTicket();
  };
  const handleMax = () => {
    if (valueInput >= 0 && valueInput <= 100) {
      setInputValue(100);
      getCost();
    } else {
      getCost();
    }
  };
  const handlePlus = () => {
    if (valueInput >= 0 && valueInput < 100) {
      setInputValue(valueInput + 1);
      getCost();
    } else {
      getCost();
    }
  };
  const handleMinus = () => {
    if (valueInput > 0) {
      setInputValue(valueInput - 1);
      getCost();
    } else {
      getCost();
    }
  };
  const handleChangeInput = (e) => {
    if (e.target.value >= 0 && e.target.value <= 100) {
      setInputValue(e.target.value);
      getCost();
      setEidtLotteryNumber(1);
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
        // console.log("not conneted ");
        // toast.error("not conneted")
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
        // console.log("not conneted ");
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
          console.log("actual cost for buying is ", acutalCostForBuy);
          const approveBlock =await web3.eth.getBlock("latest");
          console.log("approveBlock", approveBlock);
          await tokenContract.methods
            .approve(
              BabyAddress,
              acutalCostForBuy
            )
            .send({
              from: account,
              gasLimit:approveBlock.gasLimit,
              gasPrice: await web3.eth.getGasPrice()
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
      console.error("Error while approval", error);
      toast.error("Transaction Failed");
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
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center mt-3 mb-3">
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
              <div className="col-10 buyTicketBox">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-4 mt-3 mb-3">
                    <span>
                      <img src={Babylonia_token_2} /> BABY
                    </span>
                    {/* <div class="select-dropdown">
                      <select>
                        <option value="Option 1">&#8383; BNB</option>
                        <option value="Option 2">2nd Option</option>
                        <option value="Option 3">Option Number 3</option>
                      </select>
                    </div> */}
                  </div>
                  <div className="col-lg-7 d-flex justify-content-center align-items-center">
                    <span className="buyTicketSpanone">
                      Balance: &nbsp;{babyBalance}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2 mb-2">
                <div className="col-lg-8 col-11 buyTicketBox">
                  <div className="row mt-1 mb-1">
                    <div className="col-8 d-flex align-items-center">
                      <BiMinus
                        size={30}
                        onClick={() => {
                          handleMinus();
                        }}
                      />
                      <div className="miniboxoption">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="0"
                          id="input"
                          value={valueInput}
                          onChange={(e) => handleChangeInput(e)}
                        />
                      </div>
                      <BiPlus
                        size={30}
                        onClick={() => {
                          handlePlus();
                        }}
                      />
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                      <span
                        className="buyTicketSpan"
                        onClick={() => {
                          handleMax();
                        }}
                      >
                        Max
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-1 mb-1">
                <div className="col-md-12">
                  <ul className="no-bullets">
                    <li className="buyTicketSpanBoxone ">
                      Cost {costValue} BABY
                    </li>
                    <li className="buyTicketSpanBoxone mt-2">
                      Discount {percent}&nbsp;% <img src={info} width="30px" />
                    </li>
                    <li className="buyTicketSpanBoxone mt-2">
                      Total {actualCost} &nbsp; BABY + gas
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2 mb-1">
                <div className="col-md-6">
                  <div className="d-grid gap-2">
                    {lotteryCard == true ? (
                      <button
                        className="buyTicketBox-button"
                        size="lg"
                        onClick={() => handleEnable()}
                      >
                        Approval
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
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mt={`130`} borderRadius="10px">
          <Flex>
            <ModalCloseButton />

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
                  <>
                    <Flex>
                      <Box
                        color={
                          colorMode === "dark" ? "gray.100" : textTitleColor
                        }
                        fontSize="18px"
                      ></Box>
                      <Spacer />
                    </Flex>

                    <Center>
                      <Text fontSize="3xl" mb="4">
                        Edit Number
                      </Text>
                    </Center>
                    <Flex height="1"></Flex>

                    <Box
                      color={colorMode === "dark" ? "gray.100" : textColor}
                      id="BNB Field"
                      p="3"
                      // height="100px"
                      backgroundColor="white"
                      bg={colorMode === "dark" ? "black" : "white"}
                      borderRadius="5"
                      border="1px"
                    >
                      <Flex>
                        <Box
                          cursor={"pointer"}
                          display={"flex"}
                          paddingBottom={"10px"}
                          fontWeight={"300"}
                          onClick={onOpen}
                        >
                          <Text fontSize="lg">Total Cost:</Text>
                        </Box>
                        <Spacer />
                        <Box>
                          <Text fontWeight="bold" fontSize="lg">
                            1.18 BABY
                          </Text>
                        </Box>
                      </Flex>
                      <Flex my={5} justifyContent={"center"}>
                        <Center fontSize="sm" mt="-10px">
                          Buy Instantly, chooses random numbers, with no
                          duplicates among your tickets. Prices are set before
                          each round starts, equal to $5 at that time. Purchases
                          are final.
                        </Center>
                      </Flex>
                      <Center my="10">
                        <Button
                          // focusBorderColor="none"
                          id="swap_button"
                          border="1px"
                          w="80%"
                          h="40px"
                          py={6}
                          // disabled
                          variant="outline"
                          mt="-25px"
                          borderRadius="5"
                          colorScheme={colorMode === "dark" ? "white" : "black"}
                          color={colorMode === "dark" ? "white" : "black"}
                          onClick={onOpen}
                          fontFamily="Ropa Sans"
                          fontSize={"19px"}
                          fontWeight="150"
                        >
                          View/Edit Number
                        </Button>
                      </Center>
                      <Flex flexDir="column">
                        <Flex
                          justifyContent={"right"}
                          flexDir="column"
                          alignItems="flex-start"
                        >
                          <Text fontSize="" mt="0px">
                            #0.000
                          </Text>
                        </Flex>
                        <Flex
                          justifyContent={`space-around`}
                          borderRadius="10"
                          backgroundColor="#EDF2F7"
                          padding={`3`}
                          border="1px"
                          borderColor={
                            colorMode === "dark" ? "white" : textColor
                          }
                          w="100%"
                        >
                          <Text fontWeight={`bold`} fontSize="2xl">
                            0
                          </Text>
                          <Text fontWeight={`bold`} fontSize="2xl">
                            0
                          </Text>
                          <Text fontWeight={`bold`} fontSize="2xl">
                            0
                          </Text>
                          <Text fontWeight={`bold`} fontSize="2xl">
                            0
                          </Text>
                          <Text fontWeight={`bold`} fontSize="2xl">
                            0
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>

                    <Flex height="6"></Flex>

                    <Center my="10">
                      <Button
                        // focusBorderColor="none"
                        id="swap_button"
                        border="1px"
                        w="80%"
                        h="40px"
                        py={6}
                        mt="-25px"
                        borderRadius="5"
                        color={colorMode === "dark" ? "white" : "black"}
                        backgroundColor={
                          colorMode === "dark" ? "black" : "white"
                        }
                        fontFamily="Ropa Sans"
                        fontSize={"19px"}
                        fontWeight="150"
                      >
                        Confirm & Buy
                      </Button>
                    </Center>
                    <Center my="10">
                      <Button
                        // focusBorderColor="none"
                        id="swap_button"
                        w="80%"
                        h="40px"
                        py={6}
                        // disabled
                        variant="ghost"
                        mt="-25px"
                        borderRadius="5"
                        colorScheme={colorMode === "dark" ? "white" : "black"}
                        color={colorMode === "dark" ? "white" : "black"}
                        // onClick={onOpen}
                        fontFamily="Ropa Sans"
                        fontSize={"19px"}
                        fontWeight="150"
                        onClick={onClose}
                      >
                        Go Back ➡️
                      </Button>
                    </Center>
                  </>
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
      {/* <Toaster
  position="top-right"
  reverseOrder={false}
/> */}
    </div>
  );
}

export default BuyTickets;

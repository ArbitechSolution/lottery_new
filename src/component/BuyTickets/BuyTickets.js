import React, { useState } from "react";
import "./BuyTickets.css";
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
  let account = useSelector((state) => state.connect?.connection);
  //   const {
  //     isOpen: isModalOpen,
  //     onOpen: onModalOpen,
  //     onClose: onModalClose,
  //   } = useDisclosure();
  const handleConnect = async () => {
    // let acc = await loadWeb3();
    dispatch(connectionAction());
  };
  const handleBuyInstantly = () => {
    console.log("into");
    setLotteryCard(true);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-4 mb-4">
        <div className="col-lg-6 buyTicketBox">
          <div className="buyTicketBoxMini">
            <p className="buyTicketSpan mt-4" style={{ paddingLeft: "45px" }}>
              Buy Tickets
            </p>
            <div className="row d-flex justify-content-center">
              <div className="col-10 buyTicketBox">
                <div className="row d-flex justify-content-between">
                  <div className="col-lg-4 mt-2 mb-2">
                    <div class="select-dropdown">
                      <select>
                        <option value="Option 1">&#8383; BNB</option>
                        <option value="Option 2">2nd Option</option>
                        <option value="Option 3">Option Number 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex justify-content-center align-items-center">
                    <span className="buyTicketSpanone">
                      Balance: 0123456789
                    </span>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-4 mb-2">
                <div className="col-lg-6 col-11 buyTicketBox">
                  <div className="row mt-3 mb-3">
                    <div className="col-8 d-flex align-items-center">
                      <BiMinus size={30} />
                      <div className="miniboxoption">999</div>
                      <BiPlus size={30} />
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                      <span className="buyTicketSpan">Max</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-4 mb-2">
                <div className="col-md-8">
                  <ul className="no-bullets">
                    <li className="buyTicketSpanone ">Cost 0.000034 BNB</li>
                    <li className="buyTicketSpanone mt-3">
                      Discount 0.01% <img src={info} width="30px" />
                    </li>
                    <li className="buyTicketSpanone mt-3">
                      Total 0.000034 BNB + gas
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3 mb-5">
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
                    {/* {open && <ConnectWalletModal >} */}
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
    </div>
  );
}

export default BuyTickets;

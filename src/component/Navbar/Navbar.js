import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import toast, { Toaster } from "react-hot-toast";
import BabyloniaLogo from "../../Assets/Babylonia_Logo_1.png";
import { GrConnect } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import Group from "../../Assets/Group.png";
import Global from "../../Assets/global-network-.png";
import Setting from "../../Assets/setting.png";
import People from "../../Assets/NFT-people.png";

function Navbars() {
  const dispatch = useDispatch();
  let account = useSelector((state) => state.connect?.connection);
  const handleConnect = async () => {
    // let acc = await loadWeb3();
    dispatch(connectionAction());
  };
  return (
    <div style={{ backgroundColor: "#5c5c5c" }} className="ps-3 pe-3">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img src={BabyloniaLogo} className="babyImage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" d-flex justify-content-end"
        > */}
          <Nav className="text-center nav-buttons">
            {/* <Nav.Link href="/classic" className="lotterysize"> */}
            <Nav.Link href="/classic" className="lotterysize">
              <button className="btn btn-connect-Wallet" y>
                CLASSIC LOTTERY
              </button>
            </Nav.Link>
            <Nav.Link href="/" className="lotterysize">
              <button
                className="btn btn-connect-Wallet"
                // onClick={() => handleConnect()}
              >
                BABYLON JACKPOT
              </button>
            </Nav.Link>
            <Nav.Link  className="lotterysize">
              <button
                className="btn btn-connect-Wallet"
                onClick={() => toast(
                  "Coming Soon ...",
                  {
                    duration: 4000,
                  }
                )}
              >
                SLOW ROULLETE
              </button>
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <button className='btn btn-connect-Wallet'><GrConnect/> Connect Wallet</button>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Collapse
          
          className=" d-flex justify-content-end"
        >
          <Nav>
            <img src={Group} className="navbarIconBulb me-2" />
            <img src={Global} className="navbarIcons me-2 ms-2" />

            <button
              className="btn btn-connect-Wallet"
              onClick={() => handleConnect()}
            >
              <GrConnect />
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
            <img src={Setting} className="navbarIcons ms-2 me-2" />
            <img src={People} className="navbarIcons ms-2 me-2" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Toaster position="top-right" reverseOrder={false} 
      toastOptions={{
        className: '',
        style: {
          width: '250px',
          textAlign: "left",
          justifyContent: 'flex-start',
          fontFamily: 'Ropa Sans',
          fontSize: "22px"
        },
      }}
    />
    </div>
  );
}

export default Navbars;

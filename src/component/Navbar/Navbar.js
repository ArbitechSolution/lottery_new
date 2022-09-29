import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BabyloniaLogo from "../../Assets/Babylonia_Logo.png";
import { GrConnect } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
function Navbars() {
  const dispatch = useDispatch();
  let account = useSelector((state) => state.connect?.connection);

  const handleConnect = async () => {
    // let acc = await loadWeb3();
    dispatch(connectionAction());
  };
  return (
    <div style={{ backgroundColor: "#2D3748" }} className="ps-3 pe-3">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img src={BabyloniaLogo} className="babyImage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" d-flex justify-content-end"
        >
          <Nav className="text-center ">
            <Nav.Link href="" className="lotterysize">
              Lottery
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <button className='btn btn-connect-Wallet'><GrConnect/> Connect Wallet</button>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" d-flex justify-content-end"
        >
          <Nav>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;

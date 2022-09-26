import React from 'react'
import "./Navbar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BabyloniaLogo from "../../Assets/Babylonia_Logo.png"
import {GrConnect} from "react-icons/gr"
function Navbars() {
  return (
    <div style={{backgroundColor: '#2D3748'}} className="ps-3 pe-3">
        <Navbar collapseOnSelect expand="lg" variant="dark">
     
        <Navbar.Brand href="#home"><img src={BabyloniaLogo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className=" d-flex justify-content-end">
          <Nav className="text-center " >
            <Nav.Link href="" className='lotterysize'>Lottery</Nav.Link>
            
          </Nav>
          {/* <Nav>
            <button className='btn btn-connect-Wallet'><GrConnect/> Connect Wallet</button>
          </Nav> */}
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav"  className=" d-flex justify-content-end">
          <Nav>
            <button className='btn btn-connect-Wallet'><GrConnect/> Connect Wallet</button>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>

    </div>
  )
}

export default Navbars
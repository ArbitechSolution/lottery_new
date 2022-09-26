import React from 'react'
import "./BuyTickets.css"
import info from "../../Assets/info-01_128px.png"
import { BiMinus, BiPlus } from "react-icons/bi"
function BuyTickets() {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4 mb-4'>
                <div className='col-lg-6 buyTicketBox' >
                    <div className='buyTicketBoxMini'>
                        <p className='buyTicketSpan mt-4' style={{ paddingLeft: "45px" }}>Buy Tickets</p>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-10 buyTicketBox'>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-lg-4 mt-2 mb-2'>
                                        <div class="select-dropdown">
                                            <select>
                                                <option value="Option 1">&#8383; BNB</option>
                                                <option value="Option 2">2nd Option</option>
                                                <option value="Option 3">Option Number 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-7 d-flex justify-content-center align-items-center'>
                                        <span className='buyTicketSpanone'>Balance: 0123456789</span>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center mt-4 mb-2'>
                                <div className='col-lg-6 col-11 buyTicketBox'>
                                    <div className='row mt-3 mb-3'>
                                        <div className='col-8 d-flex align-items-center'>
                                            <BiMinus size={30} />
                                            <div className='miniboxoption'>999</div>
                                            <BiPlus size={30} />
                                        </div>
                                        <div className='col-4 d-flex justify-content-center align-items-center'>
                                            <span className='buyTicketSpan'>Max</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center mt-4 mb-2'>
                                <div className='col-md-8' >
                                    <ul className="no-bullets">
                                        <li className='buyTicketSpanone ' >Cost 0.000034 BNB</li>
                                        <li className='buyTicketSpanone mt-3'>Discount 0.01% <img src={info} width="30px" /></li>
                                        <li className='buyTicketSpanone mt-3'>Total 0.000034 BNB + gas</li>
                                    </ul>

                                </div>
                            </div>
                            <div className='row d-flex justify-content-center mt-3 mb-5'>
                                <div className='col-md-7'>
                                    <div className="d-grid gap-2">

                                        <button className='buyTicketBox-button'  size="lg">
                                            Connect Wallet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyTickets
import React, { useEffect } from 'react'
import "./BuyPointOne.css"
function BuyPointOne() {
    useEffect(() => {
        document.getElementById("input").focus()
    })
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mt-4 mb-4'>
                <div className='col-lg-7 buyTicketBox'>
                    <div className='buyTicketBoxMini'>
                        <p className='buyTicketSpan mt-4 text-center' >Buy Tickets</p>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-11 buyTicketBox mb-3' >
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-11 d-flex justify-content-between '>
                                        <span className='buyPointOneSpan'>Buy:</span>
                                        <span className='buyPointOneSpanOne'>Tickets</span>
                                    </div>
                                    <div className='col-11 buyoneBox'>
                                        <div className='row'>
                                            <div className='col-lg-10'>
                                                <input type="number" className='form-control' placeholder='0' id="input" />
                                            </div>
                                            <div className='col-12 d-flex justify-content-end mb-2'>
                                                <span className='buyPointOneSpan'>~0.00 BABY</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 text-end '>
                                    <span className='InsufficientText'>Insufficient BABY balance</span><br />
                                    <span className='InsufficientTextOne'>BABY Balance: 0.000</span>
                                </div>
                                <div className='row d-flex justify-content-around mt-3'>
                                    <div className='col-lg-5 buyoneBoxmini'>
                                        <span className='buyPointOneSpan'>Max</span>
                                    </div>
                                    <div className='col-lg-5 buyoneBoxmini'>
                                        <span className='buyPointOneSpan'>0</span>
                                    </div>

                                </div>
                                <div className='row d-flex justify-content-center mt-3'>
                                    <div className='col-11 d-flex justify-content-between'>
                                        <span className='buyPointOneSpan'>Cost (BABY)</span>
                                        <span className='buyPointOneSpan'>0 BABY</span>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center mt-3'>
                                    <div className='col-11 d-flex justify-content-between'>
                                        <span className='buyPointOneSpan'><span className='fw-bold'>0%</span>-Bulk discount</span>
                                        <span className='buyPointOneSpan'>~0 BABY</span>
                                    </div>
                                </div>
                                <div className='row d-flex justify-content-center mt-3  mb-4'>
                                    <div className='col-11 d-flex justify-content-between'>
                                        <span className='buyPointOneSpan'>You pay</span>
                                        <span className='buyPointOneSpan fw-bold'>~0 BABY</span>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className='row d-flex justify-content-center mt-3 mb-3'>
                            <div className='col-md-7'>
                                <div className="d-grid gap-2">

                                    <button className='buyTicketBox-button' size="lg">
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center mb-3'>
                            <div className='col-md-7'>
                                <div className="d-grid gap-2">

                                    <button className='buyTicketBox-button' size="lg">
                                        Buy Instantly
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex justify-content-center mb-5'>
                            <div className='col-md-7'>
                                <div className="d-grid gap-2">

                                    <button className='buyTicketBox-button-trensparent' size="lg">
                                        View/Edit Number
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyPointOne
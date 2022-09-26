import React from 'react'
import "./NextDraw.css"
function NextDraw() {
    return (
        <div className='container' style={{ marginTop: '80px' }}>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='nextfrawh2'>Get your tickets now!</h2>
                    <span className='nextdrawspan mt-5'>5h 7m until the draw</span>
                </div>
            </div>
            <div className='row d-flex justify-content-center mt-4 mb-4'>
                <div className='col-lg-8 buyTicketBox'>
                    <div className='buyTicketBoxMini'>
                        <div className='row d-flex justify-content-center mt-3'>
                            <div className='col-11 d-flex justify-content-between align-items-center'>
                                <span className='nextspan'>Next Draw</span>
                                <span className='nextspanone'>#655 | Draw: Sep 13, 2022, 5:00 AM</span>
                            </div>
                        </div>


                        <div className='row d-flex justify-content-center'>
                            <div className='col-11 buyTicketBox mb-3 '>
                                <div className='row'>
                                    <div className='col-lg-5 d-flex justify-content-between align-items-center ps-3'>
                                        <span className='nextspanone'>Prize Pot</span>
                                        <span className='nextspan fs-2 fw-bold'>~$92,151</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-8 d-flex justify-content-between align-items-center ps-3'>
                                        <span className='nextspanone'>Prize Pot</span>
                                        <span className='nextspan '>You have 0 ticket this round</span>
                                    </div>
                                    <div className='col-md-3 pb-3'>
                                        <div className="d-grid gap-2">

                                            <button className='buyTicketBox-button-trensparent' size="lg">
                                            Buy Instantly
                                            </button>
                                        </div>
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
export default NextDraw
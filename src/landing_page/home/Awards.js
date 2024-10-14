import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 >
                        Largest Stock Borker in India
                    </h1>
                    <p className='mb-5'>
                        2+ million Lazarus clients contribute to over 15% of all retail order volumes in india in daily by trading and investing in : 
                    </p>
                    <div className='row p-4'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Futures and Options
                                </li>
                                <li>
                                    Commodity derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>
                                    Stocks & IPOs
                                </li>
                                <li>
                                    Direct mutual funds
                                </li>
                                <li>
                                    Bonds and Govt. Securities
                                </li>
                            </ul>
                        </div>

                        <img src='media/images/pressLogos.png' className='p-2 pt-2'  style={{width: "90%"}}/>

                    </div>
                </div>
            </div>

        </div>
     );
}

export default Awards;
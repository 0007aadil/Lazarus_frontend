import React from 'react'


function Hero() {
    return ( 
        <div className='container border-bottom  '>
        <div className='row p-5 mt-5 mb-5'>
            
                <h1 className=' text-center mt-5'>
                Pricing
                </h1>
                <p className='text-center fs-5 mb-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
           
        </div>


        <div className='row p-5 mt-5 border-top text-muted fs-5'>
            
            <div className='col-4 p-5'>
                <img src='media/images/pricingEquity.svg'  style={{width:"80%"}}/>
                <h3 className='text-center '>Free equity delivery</h3>
                <p className='text-center mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
           </div>
           <div className='col-4 p-5'>
                <img src='media/images/intradayTrades.svg'  style={{width:"80%"}}  />
                <h3 className='text-center '>Intraday and F&O trades</h3>
                <p className='text-center mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           </div>
           <div className='col-4 p-5'>
                <img src='media/images/pricingEquity.svg'  style={{width:"80%"}}  />
                <h3 className='text-center '>Free direct MF
                </h3>
                <p className='text-center mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
           </div>

           
       
    </div>
    </div>
     );
}

export default Hero;
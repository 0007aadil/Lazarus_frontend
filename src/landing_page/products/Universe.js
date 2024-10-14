import React from 'react'

function Universe() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className='row text-center'>

                <h1 className='mt-3' >
                The Lazarus Universe
                </h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className='col-4  p-5'>
                    <img src='media/images/smallCaseLogo.png'   />
                    <p className='fs-8 text-muted '>Thematic investment platform</p>
                </div>

                <div className='col-4 p-5'>
                     <img src='media/images/streakLogo.png'  style={{width:"45%"}} />
                    <p className='fs-8 text-muted '>Algo & strategy platform</p>
                </div>

                <div className='col-4  p-5'>
                <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}   />
                <p className='fs-8 text-muted '>Options trading platform</p>
                </div>
                
                <div className='col-4  p-1 '>
                    <img src='media/images/zerodhaFundHouse.png' style={{width:"45%"}}   />
                    <p className='fs-8 text-muted '>Asset management</p>
                </div>

                <div className='col-4  p-1'>
                    <img src=''   /> <img src='media/images/goldenpiLogo.png' style={{width:"45%"}}   />
                    <p className='fs-8 text-muted '>Fundamental research platform
                    </p>
                </div>

                <div className='col-4  p-1'>
                <img src='media/images/dittoLogo.png' style={{width:"30%"}}   />
                <p className='fs-8 text-muted '>Insurance
                </p>
                </div>
                <button className='p-2 btn btn-success fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup now</button> 
            </div>
        </div>
     );
}

export default Universe;
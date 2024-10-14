import React from 'react'

function Team() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 '>
            
                <h1 className=' text-center'>
                About Founder
                </h1>
           
        </div>


        <div className='row p-5   text-muted ' style={{fontSize:"1.2rem",lineHeight:"1.8"}}>
            
            <div className='col-6 p-5 text-center '>
            <img src='media/images/aadil3.jpg' className='img' alt='' />
            <h4 className='mt-3'>Aadil Ahsan</h4>
            <h6>Founder, CEO</h6>
            </div>
            <div className='col-6 p-7'>
            <p>I am the founder of Lazarus, a platform I launched to simplify and revolutionize the trading experience for users, just as I wished for during my years as a trader. With a passion for financial markets and a commitment to empowering traders.I set out to create a brokerage that puts users first, offering innovative tools and resources to help them succeed</p>

             <p>With a focus on transparency and user-friendly technology, Lazaarus is dedicated to transforming the trading landscape and making it accessible to everyone.</p>

             <p>I believe in fostering a community where traders can share knowledge, seek advice, and grow together. <br/> <br/>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
       
    </div>



    </div>
     );
}

export default Team;
import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid' style={{ backgroundColor:"#BDD684"}}>
            <div className='row p-5'>
                    <div className='d-flex justify-content-between'>
                    <h4 style={{ color:"white"}} >Support Portal</h4>
                    <a href='' className='text-right ' style={{ color:"white"}}>Track tickets</a> 
                    </div>
                <div className='col-7 p-5 '>
                    
                    <h4 style={{ color:"white"}}>Search for an answer or browse help topics to create a ticket</h4>
                    <div className='mt-5'>
                        <input className='input-group p-3 '  placeholder='Eg: how do i active my f&O, why is my order getting rejected....                   ' />
                    </div>
                    <div className='mt-4 ' >
                    <a href='' style={{ color:"white"}}>Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp; <a href='' style={{ color:"white"}}> Track segment activation</a> &nbsp;&nbsp; <a href='' style={{ color:"white"}}> Intraday margins &nbsp;</a> <br/>
                    <a  href='' style={{ color:"white"}}>Kite user manual</a> 
                      
                    </div>
                </div>
                <div className='col-5'>
                    
                    <div >
                    <h4 className='mt-5' style={{ color:"white"}} >
                    Featured
                    </h4>
                    <ol>
                        <li style={{ color:"white"}} className='mt-3'><a style={{ color:"white"}} href='' >Connectivity issue - Support telephone line [Resolved]</a>  </li>
                        <li style={{ color:"white"}} className='mt-3'><a  href='' style={{ color:"white"}}>Surveillance measure on scrips - July 2024</a>  </li>

                    </ol>
                    </div>
                </div>
            </div>


        </div>
     );
}

export default Hero;
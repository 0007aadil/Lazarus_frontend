import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3 p-5'>
                    <img src={imageURL} alt='product image'  />
                </div>
                <div className='col-6 p-5 mt-5 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div >
                    <a href={tryDemo}  style={{textDecoration:"none", color:"#BDD684"}}>TryDemo <i class="fa-solid fa-long-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none", color:"#BDD684"}}>LearnMore <i class="fa-solid fa-long-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} ><img src='media/images/googlePlaybadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"50px"}} ><img src='media/images/appStorebadge.svg'/></a>
                    </div>
                    
                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;
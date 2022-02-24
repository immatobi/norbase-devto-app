import React from 'react';

const DevShop = () => {

    return (
        <>
            <div className='devto-box'>

                <div className='mrgb2 ui-line-height'>

                <a href='https://shop.dev.to/collections/2018-new-merch' target="_blank">
                <img 
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--xUUu9M3Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://thepracticaldev.s3.amazonaws.com/i/3yp9rurw75us7sz2vsag.jpg" 
                loading="lazy" style={{borderRadius: '8px'}} />
                </a>

                </div>

                <a href='https://shop.dev.to/collections/2018-new-merch' target="_blank" className='fs-23 font-weight-bold' style={{color: '#3b49df'}}>Shop DEV Basics</a>

                <div className='mrgb1'></div>

            </div>
        </>
    )

}

export default DevShop;
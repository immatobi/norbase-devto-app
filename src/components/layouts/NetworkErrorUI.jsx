import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NetworkUI = () => {

    const history = useNavigate()

    const goBack = (e) => {
        
        if(e) e.preventDefault();
        history.goBack();

    };

    return (
        <>

            <div className="not-found bg-mineshaft">

               <div className="container ui-text-center">

                <img src="../../../images/icons/wifi.svg" width="140px" alt="wifi" />
                <h3 className="mrgt1 fs-27 onwhite mrgb">Oops! Network error.</h3>
                <p className="fs-14 onwhite mrgb2">There's an error network is unstable. Please refresh</p>
                <Link onClick={(e) => goBack(e)} className="btn md ghost cc-red onwhite fs-15">Go Back</Link>

               </div>

            </div>

        </>
    )
}

export default NetworkUI;
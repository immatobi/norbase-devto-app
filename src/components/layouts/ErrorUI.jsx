import React from 'react';
import { Link } from 'react-router-dom';

const ErrorUI = () => {
    
    const goBack = (e) => {
        
        if(e) e.preventDefault();
        window.location.href = "/";

    };

    return (
        <>

            <div className="not-found bg-mineshaft">

                <div className="container ui-text-center">

                    <img src="../../../images/icons/error.svg" width="180px" alt="not-found" />
                    <h3 className="mrgt1 fs-27 onwhite mrgb">Oops! There was an error.</h3>
                    <p className="fs-14 onwhite mrgb2">We're sorry. Please go back and refresh the page.</p>
                    <Link onClick={(e) => goBack(e)} className="btn md ghost cc-red onwhite fs-15">Go Back </Link>

                        
                </div>

            </div>

        </>
    )
}

export default ErrorUI;
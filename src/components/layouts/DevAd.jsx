import React from 'react';

const DevAd = () => {

    return (
        <>
            <div className='devto-box'>

                <div className='mrgb1 ui-line-height'>

                    <a href='https://dev.to' className='fs-20 font-weight-bold' style={{color: '#3b49df'}}>DEV Community</a>
                    <span className='fs-20 font-weight-bold onblack' > is a community of 815,317 amazing developers</span>

                </div>

                <p className='fs-15 mrgb1 text-muted' > We're a place where coders share, stay up-to-date and grow their careers. </p>

                <div className='ui-text-center mb-2'>
                    <a href='https://dev.to/enter?state=new-user' class="btn btn-block btn-ghost flat btn-primary onwhite">Create Account</a>
                </div>
                <div className='ui-text-center'>
                    <a href='https://dev.to/enter' class="btn btn-block btn-ghost purp onblack">Login</a>
                </div>

            </div>
        </>
    )

}

export default DevAd;
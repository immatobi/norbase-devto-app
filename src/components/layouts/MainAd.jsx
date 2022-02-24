import React from 'react';

const MainAd = () => {

    return (
        <>
            <div className='dev-ad'>

                <div className='ad-flex'>
                    <div className='ad-img'>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png" alt="ad-logo"></img>
                    </div>

                    <div className='pdl2'>

                        <div className=' ui-line-height-large'>

                            <a href='https://dev.to' className='fs-33 font-weight-bold' style={{color: '#3b49df'}}>DEV Community</a>
                            <span className='fs-33 font-weight-bold onblack' > is a community of 815,317 amazing developers</span>

                        </div>

                        <p className='fs-17 mrgb1 text-muted' > We're a place where coders share, stay up-to-date and grow their careers. </p>


                    </div>
                </div>

                <div className='ui-text-center mb-2'>
                    <a href='https://dev.to/enter?state=new-user' class="btn btn-norm btn-primary onwhite bg-purple">Create Account</a>
                </div>
                <div className='ui-text-center'>
                    <a href='https://dev.to/enter' class="btn btn-ghost onblack">Login</a>
                </div>

            </div>
        </>
    )

}

export default MainAd;
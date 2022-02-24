import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import body from '../helpers/body'

const NavBar = ({ isFixed }) => {

    useEffect(() => {
        // body.fixNav();
    })

    return (
        <>
            <header className={`header bg-white ${isFixed && isFixed === true ? 'stick' : ''}`}>

                <div className='container-fluid'>

                    <nav className="navbar navbar-expand-lg navbar-light main-nav">

                        <Link className="navbar-brand logo" to="/">
                            <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png' alt="brand" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-main" aria-controls="nav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="nav-main">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <form className="form-inline nav-search ui-relative">
                                        <Link to='' className='nav-serach_button'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="c-icon" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
                                        </Link>
                                        <input className="form-control fs-14" type="search" placeholder="Search..." aria-label="Search" />
                                    </form>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item nav-right pdr1">
                                    <a href="https://dev.to/enter" className="btn nav-button fs-16 btn-ghost-flat">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://dev.to/enter?state=new-user" className="btn nav-button fs-16">Create Account</a>
                                </li>
                            </ul>
                        

                        </div>

                    </nav>

                </div>

                

            </header>
        </>
    )

}

export default NavBar;
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import body from '../helpers/body'
import colors from '../helpers/colors'

const Post = ({ title, titleSize, postImage, user, createdAt, tags, comments, likes, read, enableImage, url }) => {



    return(
        <>
            <div className='post'>

                {
                    enableImage && enableImage === true &&
                    <a target="_blank" href={url} className='ui-full-bg-norm post-img' style={{ backgroundImage: `url("${postImage}")` }}>
                    </a>
                }
                
                <div className='post-content-details'>

                    <div className='post-ct-head'>
                        <Link to="" className='avatar'>
                            <img src={`${ user.avatar && user.avatar }`} alt="author-avatar" />
                        </Link>
                        <div className='pdl ui-line-height-small'>
                            <div>
                                <p className='mrgb0'>
                                    <Link to="">
                                        <span className='fs-13 onmineshaft font-helveticamedium'> { user.name && user.name ? user.name : 'Author' } </span>
                                    </Link>
                                </p>
                                <span className='fs-12 text-muted font-helvetica'> { createdAt } </span>
                            </div>
                        </div>
                    </div>

                    <div className='post-ct-box'>
                        <div className='post-ct-titile'>
                            <a href={url} target="_blank" className={`font-helveticabold ${ titleSize ? 'fs-'+titleSize : 'fs-30' }`}>
                                { title }
                            </a>
                        </div>

                        <div className='post-ct-hash'>
                            {
                                tags && tags.length > 0 &&
                                <>
                                    {
                                        tags.map((t, i) => 
                                        
                                            <Link to="" className='link-hash'>
                                                <span className='fs-15' style={{color: colors.secondaries[i]}}># </span>
                                                <span className='fs-15' style={{color: '#404040'}}>{ t }</span>
                                            </Link>

                                        )
                                    }
                                </>
                            }

                        </div>

                        <div className='post-ct-actions'>
                            <a className='action-link likes' href={url} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aslz8yjw7ag60cm6e29u72vy3snk7cns" class="c-icon"><title id="aslz8yjw7ag60cm6e29u72vy3snk7cns">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                <span className='fs-14 pdl pdr'>{ likes.toString() } Reactions</span>
                            </a>

                            <a className='action-link comments' href={url} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a1tuu6bop99ue4wyusqdazpgbt5vy48p" class="crayons-icon"><title id="a1tuu6bop99ue4wyusqdazpgbt5vy48p">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                <span className='fs-14 pdl pdr'>{ comments.toString() } Comments</span>
                            </a>

                            <div className='ml-auto'>
                                <span className='fs-12 pdr2 text-muted'>{ read } min read</span>
                                <Link className='action-button'to="">
                                    <span className='fs-14'>Save</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )



}

export default Post;
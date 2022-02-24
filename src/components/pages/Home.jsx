import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import * as moment from 'moment'
import { Tab, Tabs, TabList, TabPanel  } from 'react-web-tabs';
import storage from '../helpers/storage'
import colors from '../helpers/colors'
import Post from '../layouts/Post'
import MainAd from '../layouts/MainAd'
import DevAd from '../layouts/DevAd'
import DevShop from '../layouts/DevShop'
import DevForem from '../layouts/DevForem'
import SidebarLeft from '../layouts/SidebarLeft'
import SidebarRight from '../layouts/SidebarRight'

import PostContext from '../../context/posts/postContext'


import NavBar from '../layouts/Navbar'
import body from '../helpers/body';

const Home = (props) => {

    const postContext = useContext(PostContext)

    const [selectedTab, setSelectedTab] = useState('one')


    useEffect( async () => {

        setSelectedTab( storage.fetchLegacy('post-tab') ? storage.fetchLegacy('post-tab') : 'one')
        
        if(body.isArrayEmpty(postContext.posts) === true){
            await postContext.getPosts({ perPage: 25 });
            await postContext.getTopPosts({ perPage: 25, top: 2 });
            await postContext.getRisingPosts({ perPage: 25 });

        }

    }, [])

    const configTab = (e, sel) => {
        if(e) e.preventDefault();
        storage.keepLegacy('post-tab', sel)
        setSelectedTab(sel);
     
    }

    const pickTab = (sel) => {

        if(sel === 'one' || sel === 'two' || sel === 'three' || sel === 'four' || sel === 'five'){
            return sel;
        }else{
            return 'one'
        }

    }

    return(
        <>

            <NavBar isFixed={true} />

            <main className='main-body'>

                <div className='container-fluid'>

                    <div className='row no-gutters'>

                        <div className='col-md-2 custom'>

                            <DevAd />

                            <SidebarLeft />

                            <div className='mrgb1'></div>

                            <DevShop />

                            <div className='mrgb1'></div>

                            <DevForem />

                        </div>

                        <div className='col-md-7 custom'>
                            <div className='pdl1 pdr1'>


                            <Tabs defaultTab={ pickTab(selectedTab) } className="posts-tab" onChange={(tabId) => { }}>

                                <TabList className="posts-tab-list">
                                    <Tab  onClick={(e) => { configTab(e, 'one'); }} tabFor="one" className="font-mattermedium">
                                        <span className="fs-17">Relevant</span>
                                    </Tab>
                                    <Tab onClick={(e) => { configTab(e, 'two'); }} tabFor="two" className="font-mattermedium">
                                        <span className="fs-17">Latest</span>
                                    </Tab>
                                    <Tab onClick={(e) => { configTab(e, 'three'); }} tabFor="three" className="font-mattermedium">
                                        <span className="fs-17">Top</span>
                                    </Tab>

                                </TabList>

                                <TabPanel tabId="one">
                                    <div className='post-box'>

                                        {
                                            postContext.loading &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='loader md'></span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.posts.length <= 0 &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='fs-17 onblack'>There are no posts available.</span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.posts.length > 0 &&
                                            <>
                                            
                                                {
                                                    postContext.posts.map((post, i) => 
                                                    
                                                        <>

                                                            {
                                                                i === 4 &&
                                                                <>
                                                                    <MainAd />
                                                                </>
                                                            }
                                                        
                                                            <Post
                                                                enableImage={i === 0 ? true : false}
                                                                postImage={post.cover_image}
                                                                user={{
                                                                    name: post.user ? post.user.name : '',
                                                                    avatar: post.user ? post.user.profile_image : ''
                                                                }}
                                                                createdAt={post.readable_publish_date}
                                                                title={`${post.title}`}
                                                                titleSize={i === 0 ? '30' : '25'}
                                                                tags={post.tag_list.length > 0 ? post.tag_list : []}
                                                                comments={post.comments_count}
                                                                likes={post.public_reactions_count}
                                                                read={post.reading_time_minutes}
                                                                url={post.url}
                                                            />
                                                        
                                                        </>
                                                    
                                                    )
                                                }
                                            
                                            </>
                                        }

                                    </div>
                                </TabPanel>

                                <TabPanel tabId="two">
                                    <div className='post-box'>

                                        {
                                            postContext.loading &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='loader md'></span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.rising.length <= 0 &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='fs-17 onblack'>There are no posts available.</span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.rising.length > 0 &&
                                            <>
                                            
                                                {
                                                    postContext.rising.map((post, i) => 
                                                    
                                                        <>

                                                            {
                                                                i === 4 &&
                                                                <>
                                                                    <MainAd />
                                                                </>
                                                            }
                                                        
                                                            <Post
                                                                enableImage={i === 0 ? true : false}
                                                                postImage={post.cover_image}
                                                                user={{
                                                                    name: post.user ? post.user.name : '',
                                                                    avatar: post.user ? post.user.profile_image : ''
                                                                }}
                                                                createdAt={post.readable_publish_date}
                                                                title={`${post.title}`}
                                                                titleSize={i === 0 ? '30' : '25'}
                                                                tags={post.tag_list.length > 0 ? post.tag_list : []}
                                                                comments={post.comments_count}
                                                                likes={post.public_reactions_count}
                                                                read={post.reading_time_minutes}
                                                                url={post.url}
                                                            />
                                                        
                                                        </>
                                                    
                                                    )
                                                }
                                            
                                            </>
                                        }

                                    </div>
                                </TabPanel>

                                <TabPanel tabId="three">
                                    <div className='post-box'>

                                        {
                                            postContext.loading &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='loader md'></span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.tops.length <= 0 &&
                                            <>
                                                <div className='ui-text-center'>
                                                    <span className='fs-17 onblack'>There are no posts available.</span>
                                                </div>
                                            </>
                                        }

                                        {
                                            !postContext.loading && postContext.tops.length > 0 &&
                                            <>
                                            
                                                {
                                                    postContext.tops.map((post, i) => 
                                                    
                                                        <>

                                                            {
                                                                i === 4 &&
                                                                <>
                                                                    <MainAd />
                                                                </>
                                                            }
                                                        
                                                            <Post
                                                                enableImage={i === 0 ? true : false}
                                                                postImage={post.cover_image}
                                                                user={{
                                                                    name: post.user ? post.user.name : '',
                                                                    avatar: post.user ? post.user.profile_image : ''
                                                                }}
                                                                createdAt={post.readable_publish_date}
                                                                title={`${post.title}`}
                                                                titleSize={i === 0 ? '30' : '25'}
                                                                tags={post.tag_list.length > 0 ? post.tag_list : []}
                                                                comments={post.comments_count}
                                                                likes={post.public_reactions_count}
                                                                read={post.reading_time_minutes}
                                                                url={post.url}
                                                            />
                                                        
                                                        </>
                                                    
                                                    )
                                                }
                                            
                                            </>
                                        }

                                    </div>
                                </TabPanel>

                            </Tabs>


                            </div>
                        </div>
                        <div className='col-md-3 custom'>

                            <SidebarRight />

                        </div>

                    </div>

                </div>

            </main>

        </>
    )

}

export default Home
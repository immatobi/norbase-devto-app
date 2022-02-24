import React, { useReducer } from 'react';
import Axios from 'axios';
import storage from '../../components/helpers/storage';
import body from '../../components/helpers/body';
import loader from '../../components/helpers/MainLoader'

import PostContext from './postContext';
import PostReducer from './postReducer';



import {
    GET_POSTS,
    GET_TOP_POSTS,
    GET_RISING_POSTS,
    GET_POST,
    SET_LOADING
 } from '../types';



 const PostState = (props) => {

    const initialState = {
        posts: [],
        post: {},
        tops: [],
        rising: [],
        loading: false
    }

    const [state, dispatch] = useReducer(PostReducer, initialState);
  
    const getPosts = async (options) => {

        setLoading()

        let build = '';
        
        if(options){

            const params = {
                page: options.page ? options.page : 1,
                perPage: options.perPage ? options.perPage : 50,
                tags: options.tags ? options.tags: '',
                tagsExclude: options.tagsExclude ? options.tagsExclude : '',
                username: options.username ? options.username : '',
                state: options.state ? options.state : 'fresh',
                top: options.top ? options.top : 0
            }
            // build = `${params.page ? 'page='+params.page : 'page=1'}${'&per_page='+params.perPage}${'&tags='+params.tags}${'&tags_exclude='+params.tagsExclude}${'&username='+params.username}${params.state ? '&state='+params.state : 'all'}${'&top='+params.top}`;
            build = `${params.page ? 'page='+params.page : 'page=1'}${'&per_page='+params.perPage}${'&state='+params.state}`;

        }

        try {

            await Axios.get(`${process.env.REACT_APP_BASE_URL}/articles?${build}`)
            .then( async (resp) => {

                const result = await body.shiftPosts(resp.data);

                dispatch({
                    type: GET_POSTS,
                    payload: result
                })
                

                
                // console.log(result);
                
            }).catch((err) => {
        
                 if(err && err.response && err.response.data){

                    console.log(`Error! Could not get posts ${err.response.data}`)

                }else if(err && err.toString() === 'Error: Network Error'){

                    loader.popNetwork();

                }else if(err){

                    console.log(`Error! Could not get posts ${err}`)

                }

            });

        } catch (err) {

            if(err && err.response && err.response.data){

                console.log(`Error! Could not get posts ${err.response.data}`)

            }else if(err && err.toString() === 'Error: Network Error'){

                loader.popNetwork();

            }else if(err){

                console.log(`Error! Could not get posts ${err}`)

            }

        }
    }

    const getTopPosts = async (options) => {

        setLoading()

        let build = '';
        
        if(options){

            const params = {
                page: options.page ? options.page : 1,
                perPage: options.perPage ? options.perPage : 50,
                tags: options.tags ? options.tags: '',
                tagsExclude: options.tagsExclude ? options.tagsExclude : '',
                username: options.username ? options.username : '',
                state: options.state ? options.state : 'fresh',
                top: options.top ? options.top : 1
            }
            build = `${params.page ? 'page='+params.page : 'page=1'}${'&top='+params.top}`;

        }

        try {

            await Axios.get(`${process.env.REACT_APP_BASE_URL}/articles?${build}`)
            .then( async (resp) => {

                const result = await body.shiftPosts(resp.data);

                dispatch({
                    type: GET_TOP_POSTS,
                    payload: result
                })
                
                // console.log(result);
                
            }).catch((err) => {
        
                 if(err && err.response && err.response.data){

                    console.log(`Error! Could not get posts ${err.response.data}`)

                }else if(err && err.toString() === 'Error: Network Error'){

                    loader.popNetwork();

                }else if(err){

                    console.log(`Error! Could not get posts ${err}`)

                }

            });

        } catch (err) {

            if(err && err.response && err.response.data){

                console.log(`Error! Could not get posts ${err.response.data}`)

            }else if(err && err.toString() === 'Error: Network Error'){

                loader.popNetwork();

            }else if(err){

                console.log(`Error! Could not get posts ${err}`)

            }

        }
    }

    const getRisingPosts = async (options) => {

        setLoading()

        let build = '';
        
        if(options){

            const params = {
                page: options.page ? options.page : 1,
                perPage: options.perPage ? options.perPage : 50,
                tags: options.tags ? options.tags: '',
                tagsExclude: options.tagsExclude ? options.tagsExclude : '',
                username: options.username ? options.username : '',
                state: options.state ? options.state : 'rising',
                top: options.top ? options.top : 1
            }
            build = `${params.page ? 'page='+params.page : 'page=1'}${'&state='+params.state}`;

        }

        try {

            await Axios.get(`${process.env.REACT_APP_BASE_URL}/articles?${build}`)
            .then( async (resp) => {

                const result = await body.shiftPosts(resp.data);

                dispatch({
                    type: GET_RISING_POSTS,
                    payload: result
                })
                
                // console.log(result);
                
            }).catch((err) => {
        
                 if(err && err.response && err.response.data){

                    console.log(`Error! Could not get posts ${err.response.data}`)

                }else if(err && err.toString() === 'Error: Network Error'){

                    loader.popNetwork();

                }else if(err){

                    console.log(`Error! Could not get posts ${err}`)

                }

            });

        } catch (err) {

            if(err && err.response && err.response.data){

                console.log(`Error! Could not get posts ${err.response.data}`)

            }else if(err && err.toString() === 'Error: Network Error'){

                loader.popNetwork();

            }else if(err){

                console.log(`Error! Could not get posts ${err}`)

            }

        }
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return <PostContext.Provider
            value={{
                posts: state.posts,
                tops: state.tops,
                rising: state.rising,
                loading: state.loading,
                getPosts,
                getTopPosts,
                getRisingPosts
            }}>
        {props.children}
        
    </PostContext.Provider>

 }

 export default PostState;
 
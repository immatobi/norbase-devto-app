import {
    GET_POSTS,
    GET_TOP_POSTS,
    GET_RISING_POSTS,
    GET_POST,
    SET_LOADING
} from  '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch(action.type){

        case GET_POSTS: 
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
            case GET_TOP_POSTS: 
            return {
                ...state,
                tops: action.payload,
                loading: false
            }
            case GET_RISING_POSTS: 
            return {
                ...state,
                rising: action.payload,
                loading: false
            }
        case GET_POST: 
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default: 
            return state;
    }

}
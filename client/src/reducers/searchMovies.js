import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES} from '../actions/types'

const initialState = {
    text:'',
    movies:[],
    loading: true,
    movie:[]
}

export default function (state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SEARCH_MOVIES:
            return {...state, text: payload, loading:false}
        case GET_MOVIES:
            return {...state, movies: payload, loading:false}
        case MOVIE_ERROR:
            return{...state, error: payload, loading: false}

            default: 
            return state;
    }
}
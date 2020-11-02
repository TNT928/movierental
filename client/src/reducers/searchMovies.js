import {GET_MOVIES, MOVIE_ERROR, SEARCH_MOVIES, GET_SINGLE_MOVIE, SAVE_MOVIE} from '../actions/types'

const initialState = {
    text:'',
    searchResults: [],
    movie:[],
    watchlist: [],
    loading: true,
}

export default function (state = initialState, action){
    const {type, payload} = action
    switch(type){
       
        case SEARCH_MOVIES:
            return {...state, text: payload, loading:false,}
       
         case GET_MOVIES:
            return {...state, searchResults: payload, loading:false}
         case GET_SINGLE_MOVIE:
            return {...state, movie: payload, loading:false}
        case SAVE_MOVIE:
            return {...state, watchlist:[payload, ...state.watchlist]}
        case MOVIE_ERROR:
            return{...state, error: payload, loading: false}

            default: 
            return state;
    }
}
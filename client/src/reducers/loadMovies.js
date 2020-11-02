import {LOAD_MOVIES} from '../actions/types'

const initialState = {
    movies:[],
    loading:true
}

export default function(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case LOAD_MOVIES:
            return {...state, movies:payload, loading:false}
            default: 
            return state;
    }
}
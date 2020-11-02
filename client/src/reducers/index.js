import {combineReducers} from 'redux'
import Alert from './alert'
import auth from './auth'
import searchMovies from './searchMovies'
import loadMovies from './loadMovies'



export default combineReducers({
    Alert, auth, movies:searchMovies, movie:loadMovies
}) 
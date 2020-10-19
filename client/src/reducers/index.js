import {combineReducers} from 'redux'
import Alert from './alert'
import auth from './auth'
import searchMovies from './searchMovies'


export default combineReducers({
    Alert, auth, movies:searchMovies
}) 
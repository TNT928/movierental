import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import saveMovie from '../../actions/searchMovies'
import { Fragment } from 'react'

const Watchlist = ({movie}) => {
    
    
    return (
        <Fragment>
        <div className="movie">
          <div>
            <ul >
              <li >
                <h1>{movie.title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <p >{movie.overview}
                {movie.runtime}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
}

const mapStateToProps = state =>{
    movie: state.movies.movie
}


export default connect({saveMovie})(Watchlist)

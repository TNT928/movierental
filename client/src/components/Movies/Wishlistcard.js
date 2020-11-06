import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {removeMovie} from '../../actions/searchMovies'

const Wishlistcard = ({movie, removeMovie}) => {
    return (
        <div>
             <Fragment>
        <div className="movie">
          <div>
            <ul >
              <li >
                <h1>{movie.title}</h1>
                <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
                <p >{movie.overview}</p>
                <button onClick={()=> removeMovie(movie.id)}>Remove from list</button>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
        </div>
    )
}


// const mapStateToProps = state =({
//     movie: state.movies.wishlist
// })

export default  connect(null,{removeMovie})(Wishlistcard)

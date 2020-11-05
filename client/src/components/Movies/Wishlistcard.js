import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const Wishlistcard = ({movie}) => {
    return (
        <div>
             <Fragment>
        <div className="movie">
          <div>
            <ul >
              <li >
                <h1>{movie.title}</h1>
                <img
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
              />
                <p >{movie.summary}
                {movie.runtime}
                </p>
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

export default  Wishlistcard

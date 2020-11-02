import React, {useEffect, Fragment} from 'react';
import {getSingleMovie} from '../../actions/searchMovies';
import {connect} from 'react-redux';
import '../../movie.css'

const Movie = ({getSingleMovie, match, movie}) => {
  useEffect(() => {
    getSingleMovie(match.params.id);
    console.log(movie);
  }, []);

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
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, {getSingleMovie})(Movie);

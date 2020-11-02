import {loadMovies} from '../../actions/loadMovies';
import MovieCard from './movieCard';
import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { SearchForm } from '../dashboard/searchForm';

const TrendingMovies = ({loadMovies, movies}) => {
  useEffect(() => {
    loadMovies(movies);
  }, []);

  let content;

  content =
    movies.length > 0
      ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      : null;

  return (<div className="trendingmovies">{content}</div>);
};

TrendingMovies.propTypes = {
  loadMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
});

export default connect(mapStateToProps, {loadMovies})(TrendingMovies);

import React, {useState, useEffect} from 'react';
import {searchMovies, getMovies} from '../../actions/searchMovies';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../Movies/movieCard';
import {getWishlist} from '../../actions/searchMovies'


export const SearchForm = ({searchMovies, getMovies, text, movies, results, getWishlist}) => {

useEffect(()=>{
  getWishlist()
},[getWishlist])

  const onChange = (e) => {
    searchMovies(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMovies(text);
    searchMovies('')
  };

  let content;
  content =
    movies.length > 0
      ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      : null;

  return (
    <div>
      <h1 className="heading">Here's some great movies. Looking for something specific? Use the search bar below. </h1>
   
      <form className="box" action="submit" onSubmit={onSubmit}>
        <input name="text" onChange={onChange} type="text" />
        <button>Search</button>
      </form>
      <div className="trendingmovies">{content}</div>;
    </div>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.searchResults,
});

export default connect(mapStateToProps, {searchMovies, getMovies, getWishlist})(SearchForm);

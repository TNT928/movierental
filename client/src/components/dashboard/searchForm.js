import React, {useState} from 'react';
import {searchMovies, getMovies} from '../../actions/searchMovies';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export const SearchForm = ({searchMovies, getMovies, text}) => {
 

  const onChange = (e) => {
    searchMovies(e.target.value)}
  
  const onSubmit = (e) => {
    e.preventDefault();
    getMovies(text)
  };

  return (
    <div>
      <form className="box" action="submit" onSubmit={onSubmit}>
        <input name="text" onChange={onChange} type="text"  />
        <button>Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: state.movies.text,
 
});

export default connect(mapStateToProps, {searchMovies, getMovies})(SearchForm);

import React, {useState, useEffect} from 'react';
import {searchMovies, getMovies} from '../../actions/searchMovies';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../Movies/movieCard';
import {getWishlist} from '../../actions/searchMovies';

export const SearchForm = ({
  searchMovies,
  getMovies,
  text,
  movies,
  results,
  getWishlist,
}) => {
  useEffect(() => {
    getWishlist();
  }, [getWishlist]);

  const greatMovies = [
    {image: '/bloodshot-movie-HD-poster-.jpg'},
    {image: '/callmebyyourname.jpg'},
    {image: '/notimetodie.jpg'},
    {image: '/thelastjedi.jpg'},
  ];

  const [modalopen, setModalOpen] = useState(false);

  const onChange = (e) => {
    searchMovies(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMovies(text);
    searchMovies('');
  };

  const handleClick = () => {
    setModalOpen(!modalopen);
    window.scrollTo(0,0)
  };

  let content;
  content =
    movies.length > 0
      ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      : null;

  let poster = greatMovies.map((p, index) => {
    return <img className="poster" src={p.image} key={index} />;
  });

  return (
    <div>
    <div className= {modalopen? 'defaultHidden':'defaultVisible'  }>
      <h1 className="heading">
        Here's some great movies. Looking for something specific? Use the search
        bar below.{' '}
      </h1>
      <div className="trendingmovies">{poster}</div>
        <form className="box" action="submit" onSubmit={onSubmit}>
        <input name="text" onChange={onChange} type="text" />
        <button onClick={handleClick}>Search</button>
      </form>
    </div>
      
    
      <div onClick={handleClick} className={modalopen ? 'backgroundOverlay' : null}/>
      <div className="modalContainer">
      
        <div  className={modalopen ? 'trendingmovies modal' : 'modalClosed'}>
          {content}
        </div>
      </div>
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

export default connect(mapStateToProps, {searchMovies, getMovies, getWishlist})(
  SearchForm
);

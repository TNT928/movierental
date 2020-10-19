import React, {useState} from 'react';
import {searchMovies} from '../../actions/searchMovies';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



export const SearchForm = ({searchMovies}) => {
   const [search, setSearch] = useState({
     text: ''
   })

   const {text} = search
  
  const onChange = (e) => {
   searchMovies([e.target.name]= e.target.value)
  
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   searchMovies(text)
  // };

  return (
    <div>
      <form className="box" action="submit" >
        <input name="text" onChange={onChange} type="text" value={text} />
        <button>Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  text: state.movies
});

export default connect(mapStateToProps,{searchMovies})(SearchForm);

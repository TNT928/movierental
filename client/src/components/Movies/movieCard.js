import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import {getSingleMovie, saveMovie} from '../../actions/searchMovies'
import {connect} from 'react-redux'

import axios from 'axios';



const MovieCard = ({movie, saveMovie,user, auth: {isAuthenticated}}) => {

  const options = {
    user: user,
    id: movie.id,
    title: movie.title,
    summary: movie.overview,
    image:movie.poster_path,
    movieScore: movie.vote_average
  }
 

  const onSubmit =  async() =>{
   await axios.post('/wishlist', options )
    saveMovie(movie)
   
  }

  return (


    <Fragment >
    <div className='moviecontainer'>
      
        <div >
          <ul className="movieitems">
            <li className='moviecard'>
        
         
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div className='space'/>
              <div className='cardbody'>
                 <p className='score'> {movie.vote_average} </p>

                 {isAuthenticated ?
              <div>
                <button className='wishlist' onClick={onSubmit}>Save Movie</button>
                <Link className="wishlist" to={'/movie/'+ movie.id} >Get Details</Link>
              </div> : null } 
              </div>
            
            </li>
          </ul>
        </div>
      </div>
 
    
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  watchlist: state.movies.watchlist,
  user: state.auth.user
  // singleMovie: state.movies.movies,

  
});


export default connect(mapStateToProps, {getSingleMovie, saveMovie} )(MovieCard);

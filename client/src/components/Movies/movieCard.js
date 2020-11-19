import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getSingleMovie, saveMovie} from '../../actions/searchMovies'
import {connect} from 'react-redux'
import {getWishlist} from '../../actions/searchMovies'



const MovieCard = ({movie,saveMovie,user, getWishlist, wishlist, auth: {isAuthenticated}}) => {

  const options = {
    user: user,
    id:movie.id,
    title: movie.title,
    overview: movie.overview,
    poster_path:movie.poster_path,
    vote_average: movie.vote_average
  }

 
      const savedMovie = wishlist.find(m => m.id === movie.id )
      const disabled = savedMovie ? true : false
  


  const onSubmit = () =>{
    
    saveMovie(options)
   
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
                <button disabled={disabled} className={disabled ? 'clicked':'wishlist'  } onClick={onSubmit}>Save Movie</button>
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
  wishlist: state.movies.wishlist,
  user: state.auth.user
  // singleMovie: state.movies.movies,

  
});


export default connect(mapStateToProps, {getSingleMovie, saveMovie, getWishlist} )(MovieCard);

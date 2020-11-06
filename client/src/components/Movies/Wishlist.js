import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import WishlistCard from './Wishlistcard'
import {getWishlist} from '../../actions/searchMovies'




const Wishlist = ({movies, getWishlist}) => {

  useEffect( () => {
    getWishlist(movies)
   
  },[getWishlist])
    

 let content =
    movies.length > 0
      ? movies.map((movie) => <WishlistCard key={movie.id} movie={movie} />)
      : null;

    
    return (
       <div>{content}</div>
    )
}

const mapStateToProps = (state) => ({
    movies: state.movies.wishlist,
    
})


export default connect(mapStateToProps,{getWishlist})(Wishlist)

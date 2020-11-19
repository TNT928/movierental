import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {removeMovie} from '../../actions/searchMovies'

const Wishlistcard = ({movie, removeMovie}) => {
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
  
                   <button className='wishlist' onClick={()=> removeMovie(movie.id)}>Remove from list</button>
                </div>
              
              </li>
            </ul>
          </div>
        </div>
   
      
      </Fragment>
     
      //        <Fragment>
      //   <div className="moviecontainer">
      //     <div>
      //       <ul className='movieitems'>
      //         <li className='moviecard' >
      //           <h1>{movie.title}</h1>
      //           <img
      //           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      //         />
      //           <p >{movie.overview}</p>
      //           <button onClick={()=> removeMovie(movie.id)}>Remove from list</button>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </Fragment>
        
    )
}


// const mapStateToProps = state =({
//     movie: state.movies.wishlist
// })

export default  connect(null,{removeMovie})(Wishlistcard)

import React, { Fragment } from 'react';
import TrendingMovies from './Movies/trendingMovies'


const Landing = () => {
  return (
    <Fragment> <section className="container">
     
      <div className="intro">
        <h1>Welcome to Blockbuster Max!</h1>
        <p>
          You thought blockbuster was gone for good? Well think again.
          Blockbuster Max is an exciting new venture where users can browse the
          latest movies to watch in the comfort of their own home. No late fees!
        </p>
      </div>

       
    </section>
   <div className='trendingmovies-landing'><TrendingMovies/></div></Fragment>
   
  );
};

export default Landing;

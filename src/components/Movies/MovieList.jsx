import PropTypes from 'prop-types';
import React from 'react';
import MoviesHOC from '../../HOC/MoviesHOC';
import MovieItem from './MovieItem';


const MovieList = ({ movies }) => {
  return (
    <div className='row'>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className='col-6 mb-4'>
            <MovieItem item={movie} />
          </div>
        );
      })}
    </div>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default MoviesHOC(MovieList);

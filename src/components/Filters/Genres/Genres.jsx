import PropTypes from 'prop-types';
import React from 'react';

const Genres = ({ genresList, with_genres, resetGenres, onChange }) => {
  return (
    <>
      <div>
        <button
          type='button'
          className='btn btn-outline-dark mb-2'
          onClick={resetGenres}>
          All genres
        </button>
      </div>
      {genresList.map((genre) => (
        <div key={genre.id} className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            value={genre.id}
            id={`genre${genre.id}`}
            onChange={onChange}
            checked={with_genres.includes(String(genre.id))}
          />
          <label className='form-check-label' htmlFor={`genre${genre.id}`}>
            {genre.name}
          </label>
        </div>
      ))}
    </>
  );
};

Genres.propTypes = {
  genresList: PropTypes.array.isRequired,
  with_genres: PropTypes.array.isRequired,
};

export default Genres;

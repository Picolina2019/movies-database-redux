import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const MovieItem = ({ item }) => {
  const imagePath = item.backdrop_path || item.poster_path;
  return (
    <div className='card' style={{ width: '100%' }}>
      <img
        className='card-img-top card-img--height'
        src={
          imagePath
            ? `https://image.tmdb.org/t/p/w500${imagePath}`
            : 'https://www.kosu.org/sites/kosu/files/styles/medium/public/202012/originalflow_nocoverimage.jpg'
        }
        alt='posterImage'
      />

      <div className='card-body'>
        <Link to={`/movie/${item.id}`} className='card-title'>
          {item.title}
        </Link>

        <div className='card-text'>Rating: {item.vote_average}</div>
      </div>
    </div>
  );
};
export default MovieItem
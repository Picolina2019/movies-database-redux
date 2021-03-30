import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { withAuth } from '../../hoc/withAuth';

const MovieItem = ({ item, auth }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
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
        <>
          <Link
            to={auth.user ? `/movie/${item.id}` : ``}
            onClick={handleClick}
            className='card-title'>
            {item.title}
          </Link>
          {!auth.user && clicked && (
            <div style={{ color: 'red', fontStyle: 'italic' }}>
              login first, please{' '}
            </div>
          )}
        </>
        <div className='card-text'>Rating: {item.vote_average}</div>
      </div>
    </div>
  );
};
export default withAuth(MovieItem);

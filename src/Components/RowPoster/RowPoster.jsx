import React from 'react';
import './RowPoster.css';
import { baseImgUrl } from '../../Constants/Constants.js';
import { useNavigate } from 'react-router-dom';

const RowPoster = ({ data, title }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='rowPosters'>
        {data?.results?.slice(0, 10).map((movie) => (
          <img
            key={movie.id}
            className='poster'
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title}
            onClick={() => handleClick(movie)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default RowPoster;

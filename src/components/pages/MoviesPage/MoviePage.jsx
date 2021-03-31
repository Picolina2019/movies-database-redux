import { useEffect, useState } from 'react';
import CallApi from '../../../api/api';

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    CallApi.get(`/movie/${props.match.params.id}`).then((data) =>
      setMovie(data.belongs_to_collectionc)
    );
    setLoading(false);
  }, [props.match.params.id]);
  console.log(movie);
  const newMovie = Object.entries(movie).map(([key, value]) => {
    return (
      <li key={key.id}>
        <span>
          {key}:{value}
        </span>
      </li>
    );
  });

  return <div>{newMovie}</div>;
};
export default MoviePage;

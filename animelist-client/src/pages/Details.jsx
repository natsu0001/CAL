import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';

const Details = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState(null);
  const { addToWatchlist } = useContext(WatchlistContext); 

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data'); 
        return res.json();
      })
      .then((data) => setAnime(data.data))
      .catch((err) => setError(err.message)); 
  }, [id]);

  if (error) return <p className="p-4 text-red-500">{error}</p>; 
  if (!anime) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={anime.images.jpg.image_url} className="w-64 mb-4" />
      <h1 className="text-xl font-bold mb-2">{anime.title}</h1>
      <p>{anime.synopsis}</p>
      <button
        onClick={() => addToWatchlist(anime)}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default Details;

import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import AnimeCard from '../components/AnimeCard';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Watchlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watchlist.map(anime => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            showRemoveButton
            onRemove={removeFromWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;

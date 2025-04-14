import { createContext, useContext, useEffect, useState } from 'react';

export const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem('watchlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (anime) => {
    if (!watchlist.find((a) => a.mal_id === anime.mal_id)) {
      setWatchlist([...watchlist, anime]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((a) => a.mal_id !== id));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

//  Custom hook import in components(later,should be in the hook folder)
export const useWatchlist = () => useContext(WatchlistContext);

export default WatchlistProvider;

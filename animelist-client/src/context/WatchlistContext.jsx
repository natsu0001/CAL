import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; 

export const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const { user } = useAuth();  
  const [watchlist, setWatchlist] = useState(() => {
    
    const stored = localStorage.getItem('watchlist');
    return stored ? JSON.parse(stored) : [];
  });

  
  useEffect(() => {
    if (user) {
      
      const fetchWatchlist = async () => {
        try {
          const response = await axios.get(`/api/watchlist/${user.uid}`);
          setWatchlist(response.data);
        } catch (error) {
          console.error("Failed to fetch watchlist from the backend", error);
        }
      };
      fetchWatchlist();
    }
  }, [user]);

  
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = async (anime) => {
    if (!watchlist.find((a) => a.mal_id === anime.mal_id)) {
      const flattenedAnime = {
        ...anime,
        userId: user.uid,
        image_url: anime.images?.jpg?.image_url || anime.image_url, 
      };
  
      setWatchlist([...watchlist, flattenedAnime]);
  
      if (user) {
        try {
          await axios.post('/api/watchlist', flattenedAnime);
        } catch (error) {
          console.error('Error adding anime to backend', error);
        }
      }
    }
  };

  const removeFromWatchlist = async (id) => {
    setWatchlist(watchlist.filter((a) => a.mal_id !== id));
    if (user) {
      try {
        
        await axios.delete(`/api/watchlist/${id}`);
      } catch (error) {
        console.error('Error removing anime from backend', error);
      }
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);

export { WatchlistProvider };

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../utils/api';

import TrendingSeasonCarousel from '../components/TrendingSeasonCarousel';
const Home = () => {
  return (
    <div>
      <SearchBar />
      <div className="px-4 mt-4">
        <h2 className="text-2xl font-semibold mb-2">Trending Anime</h2>
        <div className="overflow-x-auto">
          <TrendingSeasonCarousel />
        </div>
      </div>

      {/* Example: Add another carousel here */}
      {/* 
      <div className="px-4 mt-8">
        <h2 className="text-2xl font-semibold mb-2">Current Season Anime</h2>
        <CurrentSeasonCarousel />
      </div> 
      */}
    </div>
  );
};

export default Home;

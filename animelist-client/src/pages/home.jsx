import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../utils/api';

import TrendingSeasonCarousel from '../components/TrendingSeasonCarousel';
import TrendingAnimeCarousel from '../components/TrendingAnimeCarousel';
const Home = () => {
  return (
    <div>
      <SearchBar />
      <div className="px-0 mt-0">
        
        <div className="overflow-x-auto">
          <TrendingSeasonCarousel />
        </div>
      </div>

      {/*  Add another carousel  */}
      {
      <div className="px-0 mt-0">
      <div className="w-full max-w-8xl">
        <h2 className="text-2xl font-semibold mb-2 ">Trending Anime</h2>
        <TrendingAnimeCarousel />
      </div>
    </div>
      }
    </div>
  );
};

export default Home;

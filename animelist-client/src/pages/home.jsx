import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../utils/api';

import AnimeNewsSection from "../components/AnimeNewsSection";
import TrendingSeasonCarousel from '../components/TrendingSeasonCarousel';
import TrendingAnimeCarousel from '../components/TrendingAnimeCarousel';
const Home = () => {
  return (
    <div style={{ backgroundColor: '#110F1F' }} className="min-h-screen text-white">
     
      <div className="px-0 mt-0">
        
        <div className="overflow-x-auto">
          <TrendingSeasonCarousel />
        </div>
      </div>

      
      {
      <div className="px-0 mt-0">
      <div className="w-full max-w-8xl">
        
        <TrendingAnimeCarousel />
      </div>
    </div>
      }
      
      <div>
        <AnimeNewsSection />
      </div>
    </div>
    
  );
};

export default Home;

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeCard from '../components/AnimeCard';
import { searchAnime } from '../utils/api';

import AnimeNewsSection from "../components/AnimeNewsSection";
import TrendingSeasonCarousel from '../components/TrendingSeasonCarousel';
import TrendingAnimeCarousel from '../components/TrendingAnimeCarousel';
import UpcomingAnimeCarousel from "../components/UpcomingAnimeCarousel";

const Home = () => {
  return (
    <div style={{ backgroundColor: '#110F1F' }} className="min-h-screen text-white">
      
      <div className="max-w-screen-2xl mx-auto px-4">
              
        {/*issues regardung the main carousal is left*/}

        <div className="overflow-x-auto mt-0">
          <TrendingSeasonCarousel />
        </div>

       
        <div className="mt-8">
          <TrendingAnimeCarousel />
        </div>

        
        <div className="mt-8">
          <UpcomingAnimeCarousel />
        </div>

       
        <div className="mt-8">
          <AnimeNewsSection />
        </div>

      </div>
    </div>

    
  );
};

export default Home;

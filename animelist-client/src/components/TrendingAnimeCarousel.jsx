import { Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TrendingAnimeCarousel = () => {
  const [animes, setAnimes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4; // Show 4 cards at once
  const cardWidth = 260; // Card width + margin-right

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity")
      .then((res) => res.json())
      .then((data) => setAnimes(data.data.slice(0, 20)));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, animes.length - visibleCount)
    );
  };

  return (
    //have to put this in a container later
    <div className="relative w-full px-4 py-6">
      <Typography variant="h4" className="text-white mb-4">
        Top Trending Anime
      </Typography>

      {/* Navi Arrows */}
      <div className="absolute top-0 right-0 h-full flex flex-col justify-center z-10">
  <button
    onClick={handlePrev}
    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-4 border-b border-gray-700 w-full"
  >
    <ChevronLeftIcon className="w-6 h-6 mx-auto" />
  </button>
  <button
    onClick={handleNext}
    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-4 w-full"
  >
    <ChevronRightIcon className="w-6 h-6 mx-auto" />
  </button>
    </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`
          }}
        >
          {animes.map((anime) => (
           <Link
           key={anime.mal_id}
           to={`/details/${anime.mal_id}`}
           className="min-w-[250px] max-w-[250px] mr-4 bg-gray-900 rounded-lg shadow-md overflow-hidden flex-shrink-0 hover:scale-105 transition-transform"
         >
           <img
             src={anime.images.jpg.large_image_url}
             alt={anime.title}
             className="h-64 w-full object-cover"
           />
           <div className="p-3 text-white">
             <p className="text-base font-semibold line-clamp-2">{anime.title}</p>
           </div>
         </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimeCarousel;

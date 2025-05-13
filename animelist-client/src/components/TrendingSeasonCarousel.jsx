import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingSeasonCarousel = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/now")
      .then((res) => res.json())
      .then((data) => setAnimes(data.data.slice(0, 8))); 
  }, []);

  return (
   <div className="w-full">
  <Carousel autoplay loop className="w-full aspect-[4/3] sm:aspect-video md:aspect-[3/1]">
    {animes.map((anime) => (
      <div
        key={anime.mal_id}
        className="relative w-full h-full flex flex-col sm:flex-row items-end sm:items-center justify-end"
      >
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-full sm:w-2/3 h-full object-cover object-center"
        />

        {/* Overlay with gradient and text */}
        <div className="absolute inset-0 z-10 flex items-end sm:items-center bg-gradient-to-t sm:bg-gradient-to-l from-black/80 via-black/40 to-transparent">
          <div className="relative p-4 sm:p-8 ml-0 sm:ml-20 mb-6 sm:mb-10 max-w-full sm:max-w-xl text-white space-y-3 sm:space-y-4">
            <Typography
              variant="h2"
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl"
            >
              {anime.title}
            </Typography>
            <Typography
              variant="lead"
              className="text-sm sm:text-base opacity-80 line-clamp-3"
            >
              {anime.synopsis || "No description available."}
            </Typography>
            <div className="flex gap-2">
              <Link to={`/details/${anime.mal_id}`}>
                <Button size="sm" sm:size="lg" color="white">
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
</div>

  );
};

export default TrendingSeasonCarousel;

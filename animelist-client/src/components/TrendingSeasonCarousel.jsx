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
  <Carousel autoplay loop className="h-[80vh] max-h-[700px] md:max-h-[850px] lg:max-h-[900px] ">
    {animes.map((anime) => (
      <div
        key={anime.mal_id}
        className="relative w-full h-full flex items-center justify-end"
      >
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-2/3 h-full object-cover object-[center_20%]"
        />

        <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-l from-black/80 via-black/40 to-transparent">
          <div className="relative ml-4 sm:ml-10 md:ml-20 mb-6 sm:mb-10 p-4 sm:p-6 md:p-8 max-w-xl text-white space-y-3 sm:space-y-4">
            <Typography
              variant="h2"
              color="white"
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl"
            >
              {anime.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-80 line-clamp-4 text-sm sm:text-base"
            >
              {anime.synopsis || "No description available."}
            </Typography>
            <div className="flex gap-2">
              <Link to={`/details/${anime.mal_id}`}>
                <Button size="lg" color="white">
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

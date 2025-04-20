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
    <div className="rounded-xl pt-20">
      <Carousel autoplay loop className="rounded-xl h-[500px]">
        {animes.map((anime) => (
          <div key={anime.mal_id} className="relative h-full w-full">
         
          
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="h-full w-full object-cover"
          />
          
        
          
          <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-r from-black/80 via-black/50 to-transparent">
            <div className="p-8 max-w-xl text-white space-y-4">
              <Typography
                variant="h2"
                color="white"
                className="text-2xl md:text-4xl lg:text-5xl"
              >
                {anime.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-80 line-clamp-4"
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

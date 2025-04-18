import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingSeasonCarousel = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/now")
      .then((res) => res.json())
      .then((data) => setAnimes(data.data.slice(0, 5))); // fewer for clarity
  }, []);

  return (
    <div className="rounded-xl">
      <Carousel autoplay loop className="rounded-xl h-[500px]">
        {animes.map((anime) => (
          <div key={anime.mal_id} className="relative h-full w-full">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl lg:text-5xl"
                >
                  {anime.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-8 opacity-80 line-clamp-4"
                >
                  {anime.synopsis || "No description available."}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to={`/details/${anime.mal_id}`}>
                    <Button size="lg" color="white">
                      View
                    </Button>
                  </Link>
                  <a href={anime.url} target="_blank" rel="noreferrer">
                    <Button size="lg" color="white" variant="text">
                      MAL Page
                    </Button>
                  </a>
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

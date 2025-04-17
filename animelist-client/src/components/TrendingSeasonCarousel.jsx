import { Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingSeasonCarousel = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/now")
      .then((res) => res.json())
      .then((data) => setAnimes(data.data.slice(0, 10))); // More items = better test
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex gap-4 px-2 py-4">
        {animes.map((anime) => (
          <div
            key={anime.mal_id}
            className="w-[300px] bg-gray-900 rounded-lg shadow-md overflow-hidden flex-shrink-0"
          >
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-white">
              <Typography variant="h6" className="mb-2 text-lg line-clamp-2">
                {anime.title}
              </Typography>
              <Typography className="text-sm opacity-70 line-clamp-3">
                {anime.synopsis || "No description available."}
              </Typography>
              <div className="mt-2">
                <Link to={`/details/${anime.mal_id}`}>
                  <Button size="sm" color="white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSeasonCarousel;

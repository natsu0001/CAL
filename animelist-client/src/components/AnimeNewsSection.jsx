import { useEffect, useState } from "react";

const AnimeNewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetching news from Jikan (top news articles)
    fetch("https://api.jikan.moe/v4/anime/1/news") // You can swap "1" for popular anime IDs
      .then((res) => res.json())
      .then((data) => setNews(data.data.slice(0, 5))); // Top 5 news items
  }, []);

  return (
    <div className="px-4 mt-8 text-white">
      <h2 className="text-2xl font-semibold mb-4">Anime News</h2>
      <div className="grid gap-4">
        {news.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-lg font-medium mb-1">{item.title}</h3>
            <p className="text-sm opacity-75 line-clamp-3">{item.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimeNewsSection;

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchAnime } from '../utils/api';
import AnimeCard from '../components/AnimeCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.trim()) {
      setLoading(true);
      searchAnime(query).then((data) => {
        setResults(data);
        setLoading(false);
      });
    }
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

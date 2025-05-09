import { Link } from 'react-router-dom';

const AnimeCard = ({ anime, showRemoveButton, onRemove }) => (
  <div className="shrink-0 w-60 border rounded overflow-hidden shadow bg-white">
    <img
      src={anime?.images?.jpg?.image_url || anime?.image_url || '/fallback.jpg'}
      alt={anime.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-2">
      <h3 className="text-sm font-bold line-clamp-2">{anime.title}</h3>
      <Link to={`/details/${anime.mal_id}`} className="text-blue-500 text-sm block mt-1">
        View Details
      </Link>
      {showRemoveButton && (
        <button
          onClick={() => onRemove(anime.mal_id)}
          className="text-red-500 text-xs mt-2"
        >
          Remove
        </button>
      )}
    </div>
  </div>
);

export default AnimeCard;

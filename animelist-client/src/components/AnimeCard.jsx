import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => (
  <div className="border rounded overflow-hidden shadow">
    <img src={anime.images.jpg.image_url} alt={anime.title} />
    <div className="p-2">
      <h3 className="text-sm font-bold">{anime.title}</h3>
      <Link to={`/details/${anime.mal_id}`} className="text-blue-500 text-sm">View Details</Link>
    </div>
  </div>
);

export default AnimeCard;

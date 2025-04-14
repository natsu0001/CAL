import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-4">
    <Link to="/" className="font-bold">AnimeList</Link>
    <Link to="/watchlist">Watchlist</Link>
  </nav>
);

export default Navbar;

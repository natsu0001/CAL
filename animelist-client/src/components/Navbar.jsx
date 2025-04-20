import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-20 bg-gray-800/70 text-white p-4 flex gap-4 backdrop-blur-md">
    <Link to="/" className="font-bold">AnimeList</Link>
    <Link to="/watchlist">Watchlist</Link>
  </nav>
);

export default Navbar;

import { Link } from 'react-router-dom';
import { FaTwitter, FaRedditAlien, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../context/AuthContext';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/firebase';

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-20 bg-gray-800/0 text-white p-4 flex justify-between items-center">
  
  <div className="flex gap-4">
    <Link to="/" className="font-bold">AnimeList</Link>
    <Link to="/watchlist">Watchlist</Link>
    
  </div>

  <div className="w-1/3 mx-4">
      <SearchBar />
    </div>


    <div className="flex gap-4 text-xl">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="hover:text-blue-400 transition" />
      </a>
      <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
        <FaRedditAlien className="hover:text-orange-500 transition" />
      </a>
      <a href="https://t.me" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane className="hover:text-blue-500 transition" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="hover:text-indigo-500 transition" />
      </a>
    </div>
  </nav>
);

export default Navbar;

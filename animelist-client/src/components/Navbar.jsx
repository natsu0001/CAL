import { Link } from 'react-router-dom';
import { FaTwitter, FaRedditAlien, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

import { auth, provider } from "../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-gray-800/0 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="font-bold">AnimeList</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>

      <div className="w-1/3 mx-4">
        <SearchBar />
      </div>

      <div className="flex items-center gap-4 text-xl">
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

        {!user ? (
          <button
            onClick={handleGoogleLogin}
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-sm"
          >
            Login with Google
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm">Hi, {user.displayName}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-xs"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

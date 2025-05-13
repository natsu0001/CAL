import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowInput(false); // hide input after search (mobile)
    }
  };

  return (
    <div className="relative">
      {/* Desktop view */}
      <form
        onSubmit={handleSubmit}
        className="hidden sm:block w-80 md:w-[400px]"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search for anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded pl-4 pr-10 py-2 focus:outline-none text-black placeholder-gray-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Mobile view */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setShowInput(!showInput)}
          className="text-white p-2"
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
        {showInput && (
          <form onSubmit={handleSubmit} className="ml-2 w-full">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded pl-3 pr-10 py-1 focus:outline-none text-black placeholder-gray-500"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/Details";
import Watchlist from "./pages/Watchlist";
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

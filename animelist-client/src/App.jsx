import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/Details";
import Watchlist from "./pages/Watchlist";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;

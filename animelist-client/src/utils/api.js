export const searchAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`);
    const data = await res.json();
    return data.data; // array of anime
  };
  
/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (id) => {
    if(favorites.includes(id)){
      const updatedFavorites = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
    else{
      const updatedFavorites = [...favorites];
      updatedFavorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
    setFavorites(favorites);
  }, []);
  return (
    <GifContext.Provider
      value={{ gf, gifs, setGifs, filter, setFilter, favorites, addToFavorites }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;

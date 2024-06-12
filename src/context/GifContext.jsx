import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
  return <GifContext.Provider value={{gf}}>{children}</GifContext.Provider>;
};

export const GifState = () => {
    return useContext(GifContext)
}

export default GifProvider;

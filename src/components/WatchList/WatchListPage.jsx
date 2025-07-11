import { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import { AuthContext } from "../../context/AuthContext";
import React from 'react'
import { imageUrlsm } from "../../constants/constants";
import { toast } from "react-toastify";

function WatchListPage() {
    const {watchList, addToWatchList, removeFromWatchList}=useContext(WatchListContext);
    const{isLoggedIn}=useContext(AuthContext);    
    
  return (
     <div className="watchlist">
      <h2>My Watchlist</h2>
      {watchList.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div className="watchlist-grid">
          {watchList.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img src={imageUrlsm + movie.backdrop_path} alt={movie.title} />
              <p>{movie.title}</p>
              <button onClick={() => removeFromWatchList(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default WatchListPage

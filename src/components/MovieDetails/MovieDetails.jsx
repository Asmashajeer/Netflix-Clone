import React, {useState, useEffect } from 'react'
import './MovieDetails.css'
import { API_KEY, imageUrl, imageUrlOriginal } from '../../constants/constants'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import axiosInstance from '../../axios';
import { baseUrl } from '../../constants/constants';
import { useContext } from 'react';
import { WatchListContext } from '../../context/WatchListContext';
import { toast } from 'react-toastify';

const CloseIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
);
const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
);




function MovieDetails({ movie ,onClose}) { 
    const {watchList,setWatchList,addToWatchList}=useContext(WatchListContext);

    const [isPlaying,setIsPlaying]=useState(false);
    const [urlId,setUrlId]=useState("");
  
  const handlePlayButton = () => {    
    axiosInstance.get(`movie/${movie.id}/videos`)
      .then((response)=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0]);
          setIsPlaying(true);
          console.log('Play button clicked');
        }
        else{
          console.log('TrailerEmpty');
        }    
      });
  }
const handleAddwatchList=(movie)=>{
  console.log("movie added");
  addToWatchList(movie);
  toast.success("addedto watch;ist");
};

  return (
    <div className="movieDetails">  
      {!isPlaying ?      
        <div className="MovieImage"
          style={{ backgroundImage:` url(${imageUrl + movie.backdrop_path}) `}}>
            <h2 className="movieTitle">
               <span >{movie.original_title}</span> 
            </h2>
             <button  onClick={onClose} className="close-button" >
                <CloseIcon />
              </button> 
          <div className="MovieInfo">
            <span className='description'>{movie.original_language}</span>
            <span className='description'>{movie.published_at}</span>
          </div>          
        </div>
        
       :(<div className="MovieVideo">          
             <button  onClick={onClose} className="close-button" >
                <CloseIcon />
              </button>       
        <ReactPlayer playing={true} width="100%" height="300px" src={`https://www.youtube.com/watch?v=${urlId.key}`} controls={false} />
       </div>)}       
      <div className='buttons'>
        {!isPlaying?<button className="play-button" onClick={handlePlayButton}>Watch Trailer<PlayIcon />  </button>:
        <button className="play-button" onClick={()=>handleAddwatchList(movie)}>add Watchlist<AddIcon />  </button> }
          
        </div>
      </div>
    
  );
  
}
export default MovieDetails;
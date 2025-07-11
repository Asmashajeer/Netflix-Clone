import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants';
import './MovieCards.css'
import axiosInstance from '../../axios'
import Youtube from 'react-youtube'
import ReactPlayer from 'react-player';
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieCards({ title, url, isTrending }) {
  const [movies, setMovies] = useState([]);
 
  const [selectedMovie,setSelectedMovie]=useState({});
  const selectMovie=(movie)=>{
    console.log(movie.name);
    setSelectedMovie(movie);
  }
  useEffect(() => {
    axiosInstance.get(url)
    .then((response)=>{      
       setMovies(response.data.results);  
        console.log(response.data.results);
    })
    .catch((error)=>{
      alert("Network Error",error.message);
    });
   
  
  }, [])
 
  return (
    <>
      {isTrending &&
           <div className='curved'>
              <div className="curved-line"></div>
          </div> }  
      <div className='movies'>
        <h3>{title}</h3>
        <div className='posters' >             
            <ul className={isTrending?"horizontal-list":"movie-list"}>
              {movies.map((movie, index) => (
                <li className={isTrending?"post":"smallPost"} key={index}>
                  <button onClick={()=>selectMovie(movie)}>
                    <div
                      className={isTrending?"image-box":"smallimage-box"}
                      style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path}) `}}
                    ><p>{movie.original_title}</p>
                      {isTrending && <span className="overlay-text">{index + 1}</span>}
                    </div>
                  </button>
                </li>
              ))}
            </ul>               
        </div>
       
      </div>
       
        { Object.keys(selectedMovie).length !== 0  && <MovieDetails  movie={selectedMovie} onClose={() => setSelectedMovie({})} />}  
    </>  
  )
}

export default MovieCards

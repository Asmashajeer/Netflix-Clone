
import { API_KEY } from "./constants/constants";

export const originals=`discover/tv?api_key=${API_KEY}&with_networks=213`;
export const trendingNow=`trending/all/day?language=en-US`;
export const action=`discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=28`;
export const comedy=`discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=35`;
export const horror=`discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=27`;
export const romance=`discover/movie?api_key=${API_KEY}&with_networks=213&with_genres=10749`;


export const NowPlaying=`movie/now_playing`;
export const Popular=`movie/popular`;
export const TopRated =`movie/top_rated`;
export const UpComing=`movie/upcoming`;
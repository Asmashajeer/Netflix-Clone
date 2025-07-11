import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import EmailRegister from '../../components/EmailRegister/EmailRegister'
import MovieCards from '../../components/MovieCards/MovieCards'
import { action, comedy, originals, trendingNow, } from '../../urls'
import { NowPlaying,UpComing,TopRated,Popular } from '../../urls'
import FAQ from '../../components/FAQ/FAQ'
import { useState } from 'react'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import Footer from '../../components/Footer/Footer'  
import {lazy,Suspense} from 'react'
function Home() {


  return (
    <div className='home'>
      <Navbar/>
      
      <Banner/> 
         
      <MovieCards title="Trending Now" url={trendingNow} isTrending='true'/>  
      <MovieCards   title="Now Playing" url={NowPlaying}/> 
      <MovieCards   title="Popular" url={Popular}/> 
      <MovieCards   title="Top Rated" url={TopRated}/>  
      <MovieCards   title="Up Coming" url={UpComing}/>  
     
      <MovieCards   title="Originals" url={originals}/> 
      <MovieCards   title="Action" url={action}/> 
      <MovieCards   title="Comedy" url={comedy}/>     
     
        
        
      
      
      <FAQ />
      <Footer/>
    </div>
  )
}

export default Home

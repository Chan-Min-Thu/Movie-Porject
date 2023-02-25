import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Header from './component/header/Header'
import Home from './page/home/Home'
import Movie from './page/movie/Movie'
import PopularMovie from './page/movie/PopularMovie'
import TopRatedMovie from './page/movie/TopRatedMovie'
import UpcomingMovie from './page/movie/Upcomingmovie'
import NowplayingMovie from './page/movie/NowplayingMovie'
import Tv from './page/tv-series/Tv'
import PopularTv from './page/tv-series/PopularTv'
import TopRatedTv from './page/tv-series/TopRatedTv'
import OnTheAirTv from './page/tv-series/OnTheAirTv'
import AiringToday from './page/tv-series/AiringTodayTv'
import DetailsMovie from './component/DetailsMovie'
import DetailsTv from './component/DetailsTv'

function App() {

  return ( 
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/movie' element={<Movie/>}>
          <Route index element={<PopularMovie/>}></Route>
          <Route path='popular' element={<PopularMovie/>}></Route>
          <Route path='top_rated' element={<TopRatedMovie/>}></Route>
          <Route path='upcoming' element={<UpcomingMovie/>}></Route>
          <Route path='latest' element={<NowplayingMovie/>}></Route>
          <Route path=':id' element={<DetailsMovie/>}></Route>
        </Route>
        <Route  path='/tv' element={<Tv/>}>
          <Route index element={<PopularTv/>}></Route>
          <Route path='popular' element={<PopularTv/>}></Route>
          <Route path='top_rated' element={<TopRatedTv/>}></Route>
          <Route path='on_the_air' element={<OnTheAirTv/>}></Route>
          <Route path='airing_today' element={<AiringToday/>}></Route>
          <Route path=':id' element={<DetailsTv/>}></Route>
        </Route>
      
      </Routes>
    </div>
  )
}

export default App

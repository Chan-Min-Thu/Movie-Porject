import React,{useEffect,useState} from 'react';
import {BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom';
// import DetailsMovie from './DetailsMovie';

const Trendingmovie = ({data}) => {
  // const id = data.id
  
  return (
    <div className='w-[200px] relative h-[300px] p-10 rounded'>
      <Link to={`/movie/${data.id}`}>
         <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
         className="max-w-[147px] h-full rounded hover:opacity-30"/>
         <div className="text-2xl absolute opacity-0 rounded hover:opacity-100 w-[147px] h-[221px] top-[40px] p-3 text-redColor bg-transprent">
         <BsYoutube className="text-center m-auto mt-28" />
         </div>
         <span className='text-whiteColor'>{data.original_title}</span>
      </Link>
         <div>
          
         </div>
    </div> 
  )
}

export default Trendingmovie
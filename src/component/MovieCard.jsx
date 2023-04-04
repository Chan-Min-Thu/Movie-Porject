import React,{useEffect,useState} from 'react';
import {BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Trendingmovie = ({data}) => {
  // const id = data.id
  
  return (
    <div key={data.id} className='w-[200px] relative h-[300px] p-10 rounded'>
      <Link to={`/movie/${data.id}`}>
         <motion.img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{delay:0.4,duration:0.5}}
         className="max-w-[147px] h-full rounded hover:opacity-30"/>
         <motion.div 
          initial={{opacity:0}}
          whileHover={{opacity:1}}
          transition={{delay:0.2,duration:0.2}}
         className="text-2xl absolute opacity-0 rounded hover:opacity-100 w-[147px] h-[221px] top-[40px] p-3 text-redColor bg-transprent">
         <BsYoutube className="text-center m-auto mt-28" />
         </motion.div>
         <motion.span
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{delay:0.4,duration:0.8}} className='text-whiteColor'>{data.original_title}</motion.span>
      </Link>
         <div>
          
         </div>
    </div> 
  )
}

export default Trendingmovie
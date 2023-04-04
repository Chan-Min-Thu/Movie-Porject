import React,{useState,useEffect} from "react";
import { useGetVideoDataQuery } from "../../features/api";
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

const HomeContainer = ({movie}) => {
                const {data,isFetching} = useGetVideoDataQuery({
                                id:movie.id,
                                path_name:"movie"
                   })
                const [ movies,setMovies ] = useState({})
                const [ play ,setPlay] = useState(false)
                useEffect(()=>{
                  if(isFetching){
                    return 
                  }else{
                    const moviefilter =  data?.results.find(m =>m.name === 'Official Trailer')
                    setMovies(moviefilter)
                  }
                },
                [data])
                const nav = useNavigate()
                // console.log(movies)
   
  return (
    <div>
      <div className="realtive w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="opacity-20 w-full h-[500px]"
        />
        <div className="absolute md:top-5 top-[2px] right-8 md:p-10 p-3 flex  flex-row w-10/12 h-5/12">
          <div className="w-[250px] hidden md:block h-[350px] mb-10 rounded-md mr-8">
            <motion.img
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.3,transition:0.9}}
              className="w-[250px] h-[350px] rounded-md"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
          <div className="md:w-[500px] w-11/12 md:h-[400px] h-[430px] flex justify-end md:justify-center text-start p-3 flex-col mt-2 md:mt-10">
            <motion.h1 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.3,duration:0.5}}
            className="text-highlight md:text-4xl text-2xl font-semibold mb-5">
              {movie.original_title}
            </motion.h1>
            <motion.p
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.4,duration:0.5}}
            className="text-whiteColor opacity-50 h-[200px] overflow-scroll scrollbar-thin md:text-sm">
              {movie.overview}
            </motion.p>
            <div className={`${play? "md:w-[650px] w-full md:h-full h-[300px]":"w-0 h-0"} absolute md:top-0 bottom-20`}>
            <RxCross2
             onClick={()=>setPlay(false)}
             className={`${play?"inline": 'hidden'} text-whiteColor absolute top-0`}/>
            <iframe 
            className={`${play?"md:w-[650px] w-full md:h-[400px] h-[300px]":"w-0 h-0"}`}
            id="yt-iFrame"
            loading="lazy"
            allow="autoplay"
            width= "100%"
            height="100%"
            allowFullScreen
            src={`https://www.youtube.com/embed/${movies?.key}`}>

            </iframe>
            </div>
            <div className="mt-4">
              <motion.button
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:0.5,duration:0.8}}
                type="button"
                className="text-highlight bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm md:px-5 px-2 py-2.5 text-center mr-2 mb-2 bg-whiteColor dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={()=>nav(`/movie/${movie.id}`)}
              >
                Details
              </motion.button>
              <motion.button
                initial={{opacity:0,}}
                whileInView={{opacity:1}}
                transition={{delay:0.5,duration:0.8}}
                type="button"
                onClick={() =>setPlay(!play)}
                className="text-whiteColor bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-redColor dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Watch Trailer
                </motion.button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
            
export default HomeContainer;

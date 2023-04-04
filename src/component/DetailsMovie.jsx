import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery, useGetVideoDataQuery } from "../features/api";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const DetailsMovie = () => {
  let { id } = useParams();
  const { data: movie, isFetching } = useGetDetailsQuery({
    path_name: "movie",
    id: id,
  });
  const  { data:videoPara,isLoading} = useGetVideoDataQuery({
    path_name:"movie",
    id:id
  })

  const [video, setVideo]=useState('')
  const [play,setPlay] = useState(false)
  useEffect(()=>{
    if(isLoading){
      return
    }else{
      console.log(videoPara)
      const videokey = videoPara.results.find(k=>k.name === "Official Trailer")
      setVideo(videokey)
    }
  },[videoPara])
  console.log("videokey",video)

  useEffect(() => {
    console.log(movie);
  }, [movie]);
  const nav = useNavigate()
  return (
    <div className="bg-background md:h-screen h-full">
      {isFetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="realtive w-full bg-background h-auto">
         
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            className="opacity-20 w-full h-screen bg-cover"
          />
          <div className="absolute md:top-40 top-[200px] left-2 md:p-10 p-3 flex md:justify-evenly justify-end  flex-row w-9/12 h-5/12">
         
            <div className="w-[250px] hidden md:block h-[400px] rounded-md">

            <motion.img
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.4,duration:0.7}}
                className="w-[250px] h-[400px] rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-[430px] flex justify-end ml-5 md:ml-0 md:justify-center text-start flex-col mt-30 md:mt-30">
            <motion.h1 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.3,duration:0.5}}
            className="text-highlight md:text-4xl text-2xl font-semibold mb-2">
                {movie.original_title}
              </motion.h1>
              <motion.span
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.35,duration:0.9}}
            className="text-whiteColor text-sm mb-5 opacity-95 inline-block">
                ({movie.release_date}) • {movie.genres[0].name} • {movie.runtime}min
              </motion.span>
              <motion.div
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               transition={{delay:0.4,duration:0.9}} 
               className="flex mb-5">
                <AiFillHeart className="text-whiteColor text-2xl mr-5" />
                <MdStarRate className="text-highlight text-2xl" />
                <span className="text-whiteColor text-sm ml-2 mr-5">
                  {parseFloat(movie.popularity.toFixed(2))}
                </span>
                <FaPlay className="text-whiteColor text-2xl mr-2" onClick={()=>setPlay(true)} />
                <span className="text-whiteColor">Play trailer</span>
              </motion.div>
              <div className={`${play? "md:w-[650px] w-full md:h-full h-[300px]":"w-0 h-0"} z-40 absolute md:top-0 bottom-20`}>
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
            src={`https://www.youtube.com/embed/${video?.key}`}>

            </iframe>
            </div>
               <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.5,duration:0.5}} className="text-whiteColor opacity-80 md:text-md">
                {movie.overview}
              </motion.p>
              <div onClick={()=>nav(-1)} className="absolute top-[-40px] right-[-50px]">
              <RxCross2 className="text-whiteColor text-2xl" />
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default DetailsMovie;
